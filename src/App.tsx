import Services from './pages/Services.tsx'
import Confirm from './pages/Confirm.tsx'
import Booked from './pages/Booked.tsx'
import Availability from './pages/Availability.tsx'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"
import { BookingData } from './data.ts'
import './index.css'



function App() {
  const [bookingDataServiceItem, setBookingDataServiceItem] = useState(new BookingData(null, null, null, null, null))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/:providerId" element={<Services bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/services" element={<Services bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/services/:providerId" element={<Services bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/availability" element={<Availability bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/availability/:providerId" element={<Availability bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/confirm" element={<Confirm bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/confirm/:providerId" element={<Confirm bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/booked" element={<Booked bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
        <Route path="/booked/:providerId" element={<Booked bookingDataServiceItem={bookingDataServiceItem} setBookingDataServiceItem={setBookingDataServiceItem}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
