import '../App.css'
import {ServicesProp, ServiceItemProps} from './ServicesProps';

import Checkbox from '@mui/material/Checkbox';
import CommonHeader from '../common/CommonHeader';
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import CommonButton from '../common/CommonButton';
import { CommonButtonProps } from '../common/CommonButtonProps';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from "react-router";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const headerProps: CommonHeaderProps = {
    backLink: "/",
    headerText: "2Chainz"
}


function Services(props: ServicesProp){
    // const buttonProps: CommonButtonProps = {
    //     buttonText: props.buttonText,
    //     link: "/confirm",
    // }
    
    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader {...headerProps}/>
                <ServicesLabel/>
                <DateLabel {...props} />
                <ServicesList {...props}/>
                {/* <CommonButton {...buttonProps}/> */}
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

function DateLabel(props: ServicesProp){
    return (
        <div className="date-label">
            <p>{props.date.toDateString()}</p>
        </div>
    )
}

function ServicesList(props: ServicesProp){
    return (
        <div className="services-list">
            {props.serviceItems.map(function(serviceItemProps: any, i: any){
                return <ServiceItemCard key={i} {...serviceItemProps}/>
            })}
        </div>
    )
}

function ServiceItemCard(props: ServiceItemProps){
    return (
        <Link to="/confirm" className="service-item">
            <Card sx={{minWidth: '100%', display: 'flex', flexDirection: 'row' }}>
                <CardContent sx={{minWidth: '70%', display: 'flex', flexDirection: 'column' }}>
                    <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 18 }}>
                    {props.service}
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    {props.description}
                    </Typography>
                </CardContent>
                <CardContent sx={{flex: 1, marginRight: '5%'}}>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {props.price}
                    </Typography>
                </CardContent>
            </Card>
        </Link>

    )
}


export default Services;