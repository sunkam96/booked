import '../App.css'
import {ServiceItem} from '../model';

import {CommonHeader, CommonLabel} from '../common/Common';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link, useParams} from "react-router";
import {fetchServicesForProvider} from '../firestore'
import {useState, useEffect} from 'react'
import {DEFAULT_TESTING_PROVIDER} from '../defaults'

function Services(props: any){
    const {providerId} = useParams()
    const providerName = providerId? providerId : DEFAULT_TESTING_PROVIDER

    const [services, setServices] = useState<ServiceItem[]>([])
    useEffect(() => {
        fetchServicesForProvider(providerName).then(data => {
            setServices(data)
        })}, [])

    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader showBack={false} backLink="/" headerText={providerName}/>
                <CommonLabel label="Services"/>
                <ServicesList services={services} bookingData={props.bookingData} setBookingData={props.setBookingData} providerName={providerName}/>
                {/* {props.bookingData.toString()} */}
            </div>
        </div>

    )
}

function ServicesList(props: any){
    return (
        <div className="services-list">
            {props.services.map(function(serviceItem: any, i: any){
                return <ServiceItemCard key={i} serviceItem={serviceItem} bookingData={props.bookingData} setBookingData={props.setBookingData} providerName={props.providerName}/>
            })}
        </div>
    )
}

function ServiceItemCard(props: any){
    return (
        <Link to={"/availability/" + props.providerName} className="service-item" onClick={()=>{updateBookingData(props.serviceItem, props.bookingData, props.setBookingData)}}>
            <Card sx={{minWidth: '100%', display: 'flex', flexDirection: 'row' }}>
                <CardContent sx={{minWidth: '70%', display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 18 }}>
                    {props.serviceItem.service}
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {props.serviceItem.description}
                    </Typography>
                </CardContent>
                <CardContent sx={{flex: 1, marginRight: '5%'}}>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {"$" + props.serviceItem.price}
                    </Typography>
                </CardContent>
            </Card>
        </Link>

    )
}

function updateBookingData(serviceItem: any, bookingData: any, setBookingData: any){
    bookingData.serviceItem = new ServiceItem(serviceItem.service, serviceItem.description, serviceItem.price)
    setBookingData(bookingData)
}

export default Services;