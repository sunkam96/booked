import './App.css'
import { Link } from "react-router";

import {
  DatePicker as MuiDatePicker,
} from "@mui/x-date-pickers/DatePicker";
import {
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CommonButton from './common/CommonButton';
import { CommonButtonProps } from './common/CommonButtonProps';

const buttonProps: CommonButtonProps = {
  buttonText: "See Services",
  link: "/services",
}

function App() {

  return (
    <>
      <HomePage/>
    </>
  )
}

function HomePage(){
  return (
    <div className="page-container">
      <Logo/>
      <Header/>
      <DatePicker/>
      <CommonButton {...buttonProps} />
    </div>
  )
}


function Logo(){
  return(
    <div className="logo-container"></div>
  )
}

function Header(){
  return(
    <p className="header">
      <b>2Chainz</b>
    </p>
  )
}

function DatePicker(){
  return (
    <div className="date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MuiDatePicker label="Select Date" slotProps={{ textField: { fullWidth: true } }} />
            </LocalizationProvider>
    </div>
  )
}

export default App
