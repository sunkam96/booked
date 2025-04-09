import './App.css'
import { ConfirmProps } from './ConfirmProps'
import CommonHeader from './CommonHeader';
import { CommonHeaderProps } from './CommonHeaderProps';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link } from "react-router";

const headerProps: CommonHeaderProps = {
    backLink: "/services",
    headerText: "2Chainz"
}

function Confirm(props: ConfirmProps){
    return (
      <div className="page-container">
        <CommonHeader {...headerProps}/>
        <ConfirmLabel/>
        <ConfirmBooking {...props} />
        <BookNowButton buttonText={props.buttonText}/>
      </div>
    )
}

function ConfirmLabel(){
    return (
        <div className="label">
            <p>Confirm Booking</p>
        </div>
    )
}


function ConfirmBooking(props: ConfirmProps){
    return (
        <div className="confirm-booking">
            <p><b>Service: </b>{props.serviceItem.service}</p>
            <p><b>Date: </b>{props.date.toDateString()}</p>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' }, display: 'flex', flexDirection: 'column', marginTop: '5%' }}
                noValidate
                autoComplete="off"
                >
                <TextField id="firstName" label="First Name" variant="outlined" />
                <TextField id="lastName" label="Last Name" variant="outlined" />
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="phone" label="Phone" variant="outlined" />
            </Box>
        </div>
    )
}

function BookNowButton(props: any){
    return(
        <div className="book-now-button-continer">
            <Link to="/booked">
                <button className="book-now-button">{props.buttonText}</button>
            </Link>
        </div>

    )
}



export default Confirm