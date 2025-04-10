import '../App.css'
import { ConfirmProps } from './ConfirmProps'
import CommonHeader from '../common/CommonHeader';
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link } from "react-router";


const headerProps: CommonHeaderProps = {
    showBack: true,
    backLink: "/availability",
    headerText: "2Chainz"
}

function Confirm(props: ConfirmProps){
    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader {...headerProps}/>
                <ConfirmLabel/>
                <ConfirmBooking {...props} />
            </div>
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
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '100%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%'}}
                noValidate
                autoComplete="off"
                >
                <Typography variant="body2" component="div">Service: {props.serviceItem.service}</Typography>
                <Typography variant="body2" component="div">Time: {props.bookingData.selectedDate!.toDateString()}</Typography>
                <TextField id="firstName" label="First Name" variant="outlined" />
                <TextField id="lastName" label="Last Name" variant="outlined" />
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="phone" label="Phone" variant="outlined" />
                <Link to="/booked">
                    <Button variant="contained">Confirm</Button>
                </Link>
            </Box>
        </div>
    )
}


export default Confirm