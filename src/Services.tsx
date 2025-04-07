import './App.css'

import Checkbox from '@mui/material/Checkbox';
import {
    DatePicker as MuiDatePicker,
    type DatePickerProps as MuiDatePickerProps,
  } from "@mui/x-date-pickers/DatePicker";
  import {
    LocalizationProvider,
  } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { NavLink, Link } from "react-router";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Services(){
    return (
      <div className="page-container">
        <ServicesHeaderContainer/>
        <ServicesLabel/>
        <ServicesList/>
        <BookNowButton buttonText="Book Now"/>
      </div>
    )
}

function ServicesHeaderContainer(){
    return (
        <div className="services-header-container">
            <SerivcesLogo/>
            <ServicesHeader headerText="2Chainz"/>
        </div>
    )
}

function SerivcesLogo(){
    return (
      <div className="services-logo-container">
        test
      </div>
    )
}

function ServicesHeader(props:any){
    return (
        <div className="services-header-text">
            <p><b>{props.headerText}</b></p>
        </div>
    )
}

function ServicesLabel(){
    return (
        <div className="services-label">
            <p>Services</p>
        </div>
    )
}

function ServicesList(){
    return (
        <div className="services-list">
            <ChangeDatePicker/>
            <ServiceItem service="Haircut" description="Adult haircut" price={"$25"} defaultChecked={true}/>
            <ServiceItem service="Haircut and Trim" description="Adult haircut with beard trimming" price={"$35"}/>
            <ServiceItem service="Color" description="Coloring and perm" price={"$40"}/>
        </div>
    )
}

function ServiceItem(props: any){
    return (
        <div className="service-item">
            <div className="service-item-left">
                <Checkbox {...label} defaultChecked={props.defaultChecked} />
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

function ChangeDatePicker(){
    return (
      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MuiDatePicker label="Change Date" />
              </LocalizationProvider>
      </div>
    )
}

function BookNowButton(props: any){
    return(
        <div className="book-now-button-continer">
            <Link to="/confirm">
                <button className="book-now-button">{props.buttonText}</button>
            </Link>
        </div>

    )
}


export default Services;