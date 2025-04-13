import '../App.css'
import CommonHeader from '../common/CommonHeader';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link, useParams} from "react-router";
import {DEFAULT_TESTING_PROVIDER} from '../data'

function Confirm(props: any){
    const {providerId} = useParams()
    const providerName = providerId? providerId : DEFAULT_TESTING_PROVIDER

    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader showBack={true} backLink={"/availability/"+providerName} headerText={providerName}/>
                <ConfirmLabel/>
                <ConfirmBooking bookingData={props.bookingData} setBookingData={props.setBookingData} providerName={providerName}/>
                {/* {props.bookingData.toString()} */}
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

function ConfirmBooking(props: any){
    return (
        <div className="confirm-booking">
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '100%' }, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '5%'}}
                noValidate
                autoComplete="off"
                >
                <Typography variant="body2" component="div">Service: {props.bookingData.serviceItem.service}</Typography>
                <Typography variant="body2" component="div">Time: {props.bookingData.selectedDate!.toDateString()}</Typography>
                <TextField id="firstName" label="First Name" variant="outlined" />
                <TextField id="lastName" label="Last Name" variant="outlined" />
                <TextField id="email" label="Email" variant="outlined" />
                <TextField id="phone" label="Phone" variant="outlined" />
                <Link to={"/booked/" + props.providerName}>
                    <Button variant="contained">Confirm</Button>
                </Link>
            </Box>
        </div>
    )
}


export default Confirm