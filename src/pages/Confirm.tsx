import '../App.css'
import { ConfirmProps } from './ConfirmProps'
import CommonHeader from '../common/CommonHeader';
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CommonButton from '../common/CommonButton';
import { CommonButtonProps } from '../common/CommonButtonProps';

const headerProps: CommonHeaderProps = {
    showBack: true,
    backLink: "/services",
    headerText: "2Chainz"
}

const bookAppointment = (event: any) => {
    console.log("booking the appointment", event);
}

function Confirm(props: ConfirmProps){
    const buttonProps: CommonButtonProps = {
        buttonText: props.buttonText,
        link: "/booked",
        onClick: bookAppointment,
    }
    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader {...headerProps}/>
                <ConfirmLabel/>
                <ConfirmBooking {...props} />
                <CommonButton {...buttonProps}/>
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


export default Confirm