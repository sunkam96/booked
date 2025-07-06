import Services from './pages/Services.tsx'
import Confirm from './pages/Confirm.tsx'
import Booked from './pages/Booked.tsx'
import Availability from './pages/Availability.tsx'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"
import { BookingData } from './data.ts'
import './index.css'


function App() {
  const [bookingData, setBookingData] = useState(new BookingData(null, null, null, null, null))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/:providerId" element={<Services bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/services" element={<Services bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/services/:providerId" element={<Services bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/availability" element={<Availability bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/availability/:providerId" element={<Availability bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/confirm" element={<Confirm bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/confirm/:providerId" element={<Confirm bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/booked" element={<Booked bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/booked/:providerId" element={<Booked bookingData={bookingData} setBookingData={setBookingData}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
