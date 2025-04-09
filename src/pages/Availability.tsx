import '../App.css'
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import CommonHeader from '../common/CommonHeader';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AvailabilitySlot } from './AvailabilityProps';
import { useState } from 'react';

import {Link } from "react-router";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const headerProps: CommonHeaderProps = {
    showBack: true,
    backLink: "/services",
    headerText: "2Chainz",
}


function fetchAvailabilitySlots(date: Date) : AvailabilitySlot[] {
    const slots: AvailabilitySlot[] = [
        {
            startTime: new Date(date.setHours(10, 0, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(11, 0, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(13, 0, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(14, 0, 0, 0)),
        },
        {
            startTime: new Date(date.setHours(15, 0, 0, 0)),
        },
    ]
    
    return slots;
}
  

function Availability(){
    const [date, setDate] = useState(new Date());

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
                            <Chip key={i} label={slot.startTime.toLocaleTimeString() + " - " + slot.startTime.toLocaleTimeString()} variant="outlined"/>
                        </Link>
                    )
                })}
            </Stack>

        </div>
    )
}

export default Availability