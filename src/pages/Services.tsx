import '../App.css'
import {CommonHeaderProps, ServiceItem} from '../model';

import CommonHeader from '../common/CommonHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Link } from "react-router";
import { baseServicesProps } from '../data';

const headerProps: CommonHeaderProps = {
    showBack: false,
    backLink: "/",
    headerText: "2Chainz"
}

function Services(props: any){
    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader {...headerProps}/>
                <ServicesLabel/>
                <ServicesList {...baseServicesProps} bookingData={props.bookingData} setBookingData={props.setBookingData}/>
                {/* {props.bookingData.toString()} */}
            </div>
        </div>

    )
}

function ServicesLabel(){
    return (
        <div className="label">
            <p>Services</p>
        </div>
    )
}

function ServicesList(props: any){
    return (
        <div className="services-list">
            {props.serviceItems.map(function(serviceItem: any, i: any){
                return <ServiceItemCard key={i} serviceItem={serviceItem} bookingData={props.bookingData} setBookingData={props.setBookingData}/>
            })}
        </div>
    )
}

function ServiceItemCard(props: any){
    return (
        <Link to="/availability" className="service-item" onClick={()=>{updateBookingData(props.serviceItem, props.bookingData, props.setBookingData)}}>
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
                        {props.serviceItem.price}
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