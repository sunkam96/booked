import './App.css'
import { NavLink, Link } from "react-router";
import {
  DatePicker as MuiDatePicker,
  type DatePickerProps as MuiDatePickerProps,
} from "@mui/x-date-pickers/DatePicker";
import {
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Confirm(){
    return (
      <div className="page-container">
        <ConfirmHeaderContainer/>
        <ConfirmDescription service="Adult haircut" date="April 11th, 2025 at 3:30pm"/>
      </div>
    )
}

function ConfirmHeaderContainer(){
    return (
        <div className="services-header-container">
            <ConfirmLogo/>
            <ConfirmHeader headerText="2Chainz"/>
        </div>
    )
}

function ConfirmLogo(){
    return (
      <div className="services-logo-container">
        test
      </div>
    )
}

function ConfirmHeader(props:any){
    return (
        <div className="services-header-text">
            <p><b>{props.headerText}</b></p>
        </div>
    )
}

function ConfirmDescription(props: any){
    return (
        <div className="confirm-description">
            <p><b>Your appointment for been confirmed! </b></p>
            <p><b>Service: </b>{props.service}</p>
            <p><b>Date: </b>{props.date}</p>
        </div>
    )
}

export default Confirm