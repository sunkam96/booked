import '../App.css'
import {ServicesProp, ServiceItemProps} from '../ServicesProps';

import Checkbox from '@mui/material/Checkbox';
import {Link } from "react-router";
import CommonHeader from '../common/CommonHeader';
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import CommonButton from '../common/CommonButton';
import { CommonButtonProps } from '../common/CommonButtonProps';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const headerProps: CommonHeaderProps = {
    backLink: "/",
    headerText: "2Chainz"
}


function Services(props: ServicesProp){
    const buttonProps: CommonButtonProps = {
        buttonText: props.buttonText,
        link: "/confirm",
    }
    
    return (
      <div className="page-container">
        <CommonHeader {...headerProps}/>
        <ServicesLabel/>
        <DateLabel {...props} />
        <ServicesList {...props}/>
        <CommonButton {...buttonProps}/>
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
            {props.serviceItems.map(function(serviceItemProps, i){
                return <ServiceItem key={i} {...serviceItemProps}/>
            })}
        </div>
    )
}

function ServiceItem(props: ServiceItemProps){
    return (
        <div className="service-item">
            <div className="service-item-left">
                <Checkbox {...label} defaultChecked={props.checked} />
            </div>
            <div className="service-item-description">
                <p><b>{props.service}</b><br/>{props.description}</p>
            </div>
            <div className="service-item-right">
                <b>{props.price}</b>
            </div>
        </div>
    )
}

export default Services;