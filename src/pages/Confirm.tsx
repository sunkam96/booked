import '../App.css'
import {CommonHeader, CommonLabel} from '../common/Common';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router";
import {Customer} from '../data';
import {writeBookingData} from '../firestore';
import Views from '../common/util'

function Confirm(props: any){
    
    return (
        <div className="page-frame">
            <div className="page-container">
                <CommonHeader showBack={true} bookingData={props.bookingData} view={Views.CONFIRM}/>
                <CommonLabel label="Confirm Booking"/>
                <ConfirmBooking bookingData={props.bookingData} setBookingData={props.setBookingData}/>
            </div>
        </div>
    )
}

function handleInputChange(evt: any, field: any, bookingData: any, setBookingData: any){
    evt.preventDefault()
    const currentCustomer = bookingData.customer ? bookingData.customer : new Customer(null, null, null)
    setBookingData({
        ...bookingData,
        customer: {
            ...currentCustomer,
            [field]: evt.target.value
        }
    })
}

function handleConfirm(bookingData: any){
    writeBookingData(bookingData);
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
                <Typography variant="body2" component="div">Time: {props.bookingData.serviceDate.toDateString()}</Typography>
                <TextField id="name" label="Name" variant="outlined" onChange={(evt) => handleInputChange(evt, "name", props.bookingData, props.setBookingData)} />
                <TextField id="email" label="Email" variant="outlined" onChange={(evt) => handleInputChange(evt, "email", props.bookingData, props.setBookingData)}/>
                <TextField id="phone" label="Phone" variant="outlined" onChange={(evt) => handleInputChange(evt, "phone", props.bookingData, props.setBookingData)} />
                <Link to={"/"+props.bookingData.provider.name + "/booked"} onClick={() => handleConfirm(props.bookingData)}>
                    <Button variant="contained">Confirm</Button>
                </Link>
            </Box>
        </div>
    )
}


export default Confirm