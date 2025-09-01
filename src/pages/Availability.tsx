import '../App.css';
import { CommonHeader, CommonLabel } from '../common/Common';
import Layout from '../common/Layout';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link } from "react-router";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Views from '../common/util';
import { BookingData } from '../data';

function Availability(props: any) {
    const providerName = props.bookingData.provider.name;
    const [serviceDate, setServiceDate] = useState(props.bookingData.serviceDate ? props.bookingData.serviceDate : new Date());

    return (
        <Layout>
            <CommonHeader bookingData={props.bookingData} view={Views.AVAILABILITY} />
            <CommonLabel label="Availability" />
            <AvailabilityDatePicker serviceDate={serviceDate} setServiceDate={setServiceDate} bookingData={props.bookingData} setBookingData={props.setBookingData} />
            <SlotsTable serviceDate={serviceDate} setServiceDate={setServiceDate} bookingData={props.bookingData} setBookingData={props.setBookingData} providerName={providerName} />
        </Layout>
    );
}

function AvailabilityDatePicker(props: any) {
    return (
        <div className="availability-date-picker">
            <p>Please select a date:</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker onChange={(newDate) => updateBookingDataDate(newDate, props.setServiceDate)} defaultValue={dayjs(new Date())} />
            </LocalizationProvider>
        </div>
    )
}

function updateBookingDataDate(newDate: any, setServiceDate: any) {
    setServiceDate(new Date(Date.parse(newDate)))
}

function SlotsTable(props: any) {
    const slots = getSlots(props.serviceDate)
    return (
        <div className="available-slots-table">
            <h3>Available Slots</h3>
            <Stack direction="column" spacing={2}>
                {slots.map(function (slot: any, i: number) {
                    return (
                        <Link key={i} to={"/" + props.bookingData.provider.name + "/confirm"} onClick={() => bookSlot(slot, props.bookingData, props.setBookingData)}>
                            <Chip key={i} label={slot.toLocaleTimeString()} variant="outlined" />
                        </Link>
                    )
                })}
            </Stack>

        </div>
    )
}

function getSlots(serviceDate: any) {
    // TODO: use bookingData.serviceItem and serviceDate to fetch slots dynamically
    return [
        new Date(serviceDate.setHours(9, 0, 0, 0)),
        new Date(serviceDate.setHours(9, 30, 0, 0)),
        new Date(serviceDate.setHours(10, 0, 0, 0)),
        new Date(serviceDate.setHours(10, 30, 0, 0)),
        new Date(serviceDate.setHours(12, 0, 0, 0)),
    ]

}

function bookSlot(slot: any, bookingData: BookingData, setBookingData: any) {
    setBookingData({
        ...bookingData,
        serviceDate: slot,
        bookingDate: new Date(),
    })
}

export default Availability