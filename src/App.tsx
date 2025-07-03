import Services from './pages/Services.tsx'
import Confirm from './pages/Confirm.tsx'
import Booked from './pages/Booked.tsx'
import Availability from './pages/Availability.tsx'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"
import { BookingData } from './model.ts'
import { BookingData as BookingDataV2 } from './data.ts'
import './index.css'



function App() {
  const [bookingData, setBookingData] = useState(new BookingData())
  const [bookingDataV2, setBookingDataV2] = useState(new BookingDataV2(null, null, null, null, null))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/:providerId" element={<Services bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/services" element={<Services bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/services/:providerId" element={<Services bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/availability" element={<Availability bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/availability/:providerId" element={<Availability bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/confirm" element={<Confirm bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/confirm/:providerId" element={<Confirm bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/booked" element={<Booked bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
        <Route path="/booked/:providerId" element={<Booked bookingData={bookingData} setBookingData={setBookingData} bookingDataV2={bookingDataV2} setBookingDataV2={setBookingDataV2}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
