import '../App.css'
import CommonHeader from '../common/CommonHeader';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AvailabilitySlot, BookingData } from '../model';
import {DEFAULT_TESTING_PROVIDER} from '../data'
import {Link, useParams} from "react-router";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function fetchAvailabilitySlots(date: Date) : AvailabilitySlot[] {
    const slots: AvailabilitySlot[] = [
        new AvailabilitySlot(new Date(date.setHours(10, 0, 0, 0)), new Date(date.setHours(10, 30, 0, 0))),
        new AvailabilitySlot(new Date(date.setHours(10, 30, 0, 0)), new Date(date.setHours(11, 0, 0, 0))),
        new AvailabilitySlot(new Date(date.setHours(13, 0, 0, 0)), new Date(date.setHours(14, 30, 0, 0))),
        new AvailabilitySlot(new Date(date.setHours(14, 30, 0, 0)), new Date(date.setHours(15, 30, 0, 0))),
        new AvailabilitySlot(new Date(date.setHours(15, 30, 0, 0)), new Date(date.setHours(16, 0, 0, 0))),
    ]
    return slots;
}
  

function Availability(props: any){
    const {providerId} = useParams()
    const providerName = providerId? providerId : DEFAULT_TESTING_PROVIDER

    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader showBack={true} backLink={"/services/"+providerName} headerText={providerName}/>
          <AvailabilityLabel/>
          <AvailabilityDatePicker bookingData={props.bookingData} setBookingData={props.setBookingData}/>
          <SlotsTable bookingData={props.bookingData} setBookingData={props.setBookingData} providerName={providerName}/>
          {/* {props.bookingData.toString()} */}
        </div>
      </div>

    )
}

function AvailabilityLabel(){
    return (
        <div className="label">
            <p>Availability</p>
        </div>
    )
}

function AvailabilityDatePicker(props: any){
    return (
        <div className="availability-date-picker">
            <p>Please select a date:</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(newDate) => updateBookingDataDate(newDate, props.bookingData, props.setBookingData)} defaultValue={dayjs(props.bookingData.date? props.bookingData.date : new Date())}/>
            </LocalizationProvider>
        </div>
    )
}

function updateBookingDataDate(newDate: any, bookingData: BookingData, setBookingData: any){
    const updatedBookingData = new BookingData(new Date(Date.parse(newDate)), bookingData.serviceItem, bookingData.customer, bookingData.selectedSlot)
    setBookingData(updatedBookingData)
}

function SlotsTable(props: any){
    const slots = fetchAvailabilitySlots(props.bookingData.date? props.bookingData.date : new Date());
    return (
        <div className="available-slots-table">
            <h3>Available Slots</h3>
            <Stack direction="column" spacing={2}>
                {slots.map(function(slot: AvailabilitySlot, i: number){
                    return (
                        <Link key={i} to={"/confirm/" + props.providerName} onClick={() => updateBookingDataSlot(slot, props.bookingData, props.setBookingData)}>
                            <Chip key={i} label={slot.startTime.toLocaleTimeString() + " - " + slot.endTime.toLocaleTimeString()} variant="outlined"/>
                        </Link>
                    )
                })}
            </Stack>

        </div>
    )
}

function updateBookingDataSlot(slot: AvailabilitySlot, bookingData: BookingData, setBookingData: any){
    const selectedDate = bookingData.selectedDate ? bookingData.selectedDate : new Date()
    const updatedBookingData = new BookingData(selectedDate, bookingData.serviceItem, bookingData.customer, slot)
    setBookingData(updatedBookingData)
}

export default Availability