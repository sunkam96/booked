import '../App.css'
import CommonHeader from '../common/CommonHeader';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AvailabilitySlot, CommonHeaderProps } from '../model';
import { useState } from 'react';

import {Link } from "react-router";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { AvailabilityProps } from '../model';


const headerProps: CommonHeaderProps = {
    showBack: true,
    backLink: "/services",
    headerText: "2Chainz",
}


function fetchAvailabilitySlots(date: Date) : AvailabilitySlot[] {
    const slots: AvailabilitySlot[] = [
        {
            startTime: new Date(date.setHours(10, 0, 0, 0)),
            endTime: new Date(date.setHours(10, 30, 0, 0))
        },
        {
            startTime: new Date(date.setHours(10, 30, 0, 0)),
            endTime: new Date(date.setHours(11, 0, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(13, 0, 0, 0)),
            endTime: new Date(date.setHours(14, 30, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(14, 30, 0, 0)),
            endTime: new Date(date.setHours(15, 30, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(15, 30, 0, 0)),
            endTime: new Date(date.setHours(16, 0, 0, 0)),
        },
    ]
    
    return slots;
}
  

function Availability(props: AvailabilityProps){
    const [date, setDate] = useState(props.bookingData.selectedDate? props.bookingData.selectedDate: new Date());
    console.log("The availability props are", props);
    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader {...headerProps}/>
          <AvailabilityLabel/>
          <AvailabilityDatePicker date={date} setDate={setDate}/>
          <SlotsTable date={date}/>
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
                <DatePicker defaultValue={dayjs(props.date)} onChange={(selectedDate) => {props.setDate(selectedDate?.toDate())}}/>
            </LocalizationProvider>
        </div>
    )
}

function SlotsTable(props: any){
    const slots = fetchAvailabilitySlots(props.date);
    return (
        <div className="available-slots-table">
            <h3>Available Slots</h3>
            <Stack direction="column" spacing={2}>
                {slots.map(function(slot: AvailabilitySlot, i: number){
                    return (
                        <Link key={i}  to="/confirm">
                            <Chip key={i} label={slot.startTime.toLocaleTimeString() + " - " + slot.endTime.toLocaleTimeString()} variant="outlined"/>
                        </Link>
                    )
                })}
            </Stack>

        </div>
    )
}

export default Availability