import '../App.css'
import {CommonLabel} from '../common/Common';
import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import {Link, useNavigate} from "react-router";
import {useState} from 'react'
import {Provider, ServiceItem} from '../data';
import {writeNewProvider, saveProviderLogoImage} from '../firestore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const NAVIGATION_TO_SERVICES_WAIT_TIME = 2500; // milliseconds

function handleFormChange(evt: any, field: any, provider: any, setProvider: any){
    evt.preventDefault()
    setProvider({
        ...provider,
        [field]: evt.target.value
    })
}

function handleLogoImageChange(evt: any, setLogoImage: any){
    evt.preventDefault()
    const file = evt.target.files[0]
    if(file){
        setLogoImage(file)
    }
}

function handleFormSubmit(evt: any, provider: any, serviceItems: any, logoImage: any, navigate: any){
    evt.preventDefault();
    saveProviderLogoImage(logoImage).then((downloadUrl) => {
        if(downloadUrl){
            writeNewProvider(new Provider(provider.name, downloadUrl, provider.description, serviceItems)).then(() => {
                setTimeout(() =>{
                    navigate(`/${provider.name}/services`)
                }, NAVIGATION_TO_SERVICES_WAIT_TIME);
            }).catch((error) => {
                console.log("Unable to create new provider", error)
            })
        }
    }).catch((error) => {
        console.error("Error uploading provider logo:", error);
    })

}

function addAdditionalServiceItem(evt: any, serviceItems: ServiceItem[], setServiceItems: any){
    evt.preventDefault();
    const newServiceItem = new ServiceItem(null, null, null, null);
    setServiceItems([...serviceItems, newServiceItem]);
}

function removeServiceItem(evt: any, index: number, serviceItems: ServiceItem[], setServiceItems: any){
    evt.preventDefault();
    const updatedServiceItems = serviceItems.filter((_, i) => i !== index);
    setServiceItems(updatedServiceItems);
}

function RegisterProvider(){
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonLabel label={"Signup as a provider"} />
          <ProviderForm/>
        </div>
      </div>
    )
}

function handleServiceItemChangeEvent(evt: any, index: any, field: keyof ServiceItem, serviceItems: ServiceItem[], setServiceItems: any){
    evt.preventDefault()
    const updatedServiceItems = [...serviceItems]
    const serviceItem = updatedServiceItems[index]
    if(serviceItem){
        serviceItem[field] = evt.target.value
        setServiceItems(updatedServiceItems)
    }
}


function ProviderForm(){
    const [provider, setProvider] = useState(new Provider(null, null, null, null))
    const [serviceItems, setServiceItems] = useState<ServiceItem[]>([])
    const [logoImage, setLogoImage] = useState<File | null>(null)
    const navigate = useNavigate()

    return (
        <div className="confirm-booking">
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '100%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%'}}
                noValidate
                autoComplete="off"
                >
                <TextField id="name" label="Name" variant="outlined" onChange={(evt) => handleFormChange(evt, "name", provider, setProvider)}/>
                <TextField id="description" label="Description" variant="outlined" onChange={(evt) => handleFormChange(evt, "description", provider, setProvider)}/>
                <TextField id="email" type="email" label="Email" variant="outlined" onChange={(evt) => handleFormChange(evt, "email", provider, setProvider)}/>
                <TextField id="phone" type="tel" label="Phone" variant="outlined" onChange={(evt) => handleFormChange(evt, "phone", provider, setProvider)}/>
                <ServiceItems serviceItems={serviceItems} setServiceItems={setServiceItems}/>
                <Input id="logo" type="file" onChange={(evt) => handleLogoImageChange(evt, setLogoImage)}/>
                <Link to={"/services"} onClick={(evt) => handleFormSubmit(evt, provider, serviceItems, logoImage, navigate)}>
                    <Button variant="contained">Confirm</Button>
                </Link>
            </Box>
        </div>
    )
}

function ServiceItems(props: any){
    return (
        <div className="service-items">
            {Array.isArray(props.serviceItems) && props.serviceItems.map((item: any, index: number) => (
                <ServiceItemCard key={index} index={index} serviceItem={item} serviceItems={props.serviceItems} setServiceItems={props.setServiceItems}/>
            ))}
            <div className="service-item-add-more">
                <AddCircleOutlineIcon onClick={(evt) => addAdditionalServiceItem(evt, props.serviceItems, props.setServiceItems)} style={{cursor: 'pointer'}}/>
                <div className="service-item-add-more-text">Add another service</div>
            </div>
        </div>
    )
}


function ServiceItemCard(props: any){
    return(
        <div className="service-item-card">
            <TextField id="service" label="Service" variant="outlined" onChange={(evt) => handleServiceItemChangeEvent(evt, props.index, "service", props.serviceItems, props.setServiceItems)}/>
            <TextField id="description" label="Description" variant="outlined" onChange={(evt) => handleServiceItemChangeEvent(evt, props.index, "description", props.serviceItems, props.setServiceItems)}/>
            <TextField id="price" type="number" label="Price" variant="outlined" onChange={(evt) => handleServiceItemChangeEvent(evt, props.index,"price", props.serviceItems, props.setServiceItems)}/>
            <TextField id="duration" type="number" label="Duration (minutes)" variant="outlined" onChange={(evt) => handleServiceItemChangeEvent(evt, props.index,"time", props.serviceItems, props.setServiceItems)}/>
            <RemoveCircleOutlineIcon onClick={(evt) => removeServiceItem(evt, props.index, props.serviceItems, props.setServiceItems)} style={{cursor: 'pointer'}}/>

        </div>
    )
}


    

export default RegisterProvider