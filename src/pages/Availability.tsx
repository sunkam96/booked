import '../App.css'
import { CommonHeaderProps } from '../common/CommonHeaderProps';
import CommonHeader from '../common/CommonHeader';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useState } from 'react';

const headerProps: CommonHeaderProps = {
    showBack: true,
    backLink: "/services",
    headerText: "2Chainz",
}

function Availability(){
    const [date, setDate] = useState(new Date());

    return (
      <div className="page-frame">
        <div className="page-container">
          <CommonHeader {...headerProps}/>
          <AvailabilityLabel/>
          <AvailabilityDatePicker date={date} setDate={setDate}/>
          <p>Showing slots for {date.toDateString()}</p>
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
export default Availability