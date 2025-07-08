import '../App.css'
import {CommonLabel} from '../common/Common';
import '../App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from "react-router";
import {useState} from 'react'
import {Provider, ServiceItem} from '../data';
import {writeNewProvider} from '../firestore';


function RegisterProvider(props: any){
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonLabel label={"Signup as a provider"} />
          <ProviderForm/>
        </div>
      </div>
    )
}

function handleFormChange(evt: any, field: any, provider: any, setProvider: any){
    evt.preventDefault()
    setProvider({
        ...provider,
        [field]: evt.target.value
    })
}

function handleAddServiceItem(evt: any, field: any, serviceItem: any, setServiceItem: any){
    evt.preventDefault()
    setServiceItem({
        ...serviceItem,
        [field]: evt.target.value
    })
}

function handleFormSubmit(provider: any, serviceItem: any){
    console.log("handleFormSubmit", provider, serviceItem)
    writeNewProvider(new Provider(provider.name, null, provider.description, [serviceItem]))
}

function ProviderForm(props: any){
    const [provider, setProvider] = useState(new Provider(null, null, null, null))
    const [serviceItem, setServiceItem] = useState(new ServiceItem(null, null, null, null))
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
                <TextField id="email" label="Email" variant="outlined" onChange={(evt) => handleFormChange(evt, "email", provider, setProvider)}/>
                <TextField id="phone" label="Phone" variant="outlined" onChange={(evt) => handleFormChange(evt, "phone", provider, setProvider)}/>
                <TextField id="description" label="Description" variant="outlined" onChange={(evt) => handleAddServiceItem(evt, "description", serviceItem, setServiceItem)}/>
                <TextField id="price" label="Price" variant="outlined" onChange={(evt) => handleAddServiceItem(evt, "phone", serviceItem, setServiceItem)}/>
                <TextField id="service" label="Service" variant="outlined" onChange={(evt) => handleAddServiceItem(evt, "service", serviceItem, setServiceItem)}/>
                <Link to={"/services"} onClick={() => handleFormSubmit(provider, serviceItem)}>
                    <Button variant="contained">Confirm</Button>
                </Link>
            </Box>
        </div>
    )
}

export default RegisterProvider