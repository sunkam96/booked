import Services from './pages/Services.tsx'
import Confirm from './pages/Confirm.tsx'
import Booked from './pages/Booked.tsx'
import Availability from './pages/Availability.tsx'
import RegisterProvider from './pages/RegisterProvider.tsx'
import Providers from './pages/Providers.tsx'
import Auth from './pages/Auth.tsx'
import Error from './pages/Error.tsx'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router"
import { BookingData } from './data.ts'
import './index.css'
// v2 imports
import ProvidersV2 from './v2/pages/ProvidersV2.tsx'
import ErrorV2 from './v2/pages/ErrorV2.tsx'
import RegisterProviderV2 from './v2/pages/RegisterProviderV2.tsx'

function App() {
  const [bookingData, setBookingData] = useState(new BookingData(null, null, null, null, null))
  const [eventLink, setEventLink] = useState<string | null>(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Providers bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/providers" element={<Providers bookingData={bookingData} setBookingData={setBookingData} />} />
        <Route path="/:providerName" element={<Services bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/:providerName/services" element={<Services bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/:providerName/availability" element={<Availability bookingData={bookingData} setBookingData={setBookingData}/>} />
        <Route path="/:providerName/confirm" element={<Confirm bookingData={bookingData} setBookingData={setBookingData} setEventLink={setEventLink} />} />
        <Route path="/:providerName/booked" element={<Booked bookingData={bookingData} setBookingData={setBookingData} eventLink={eventLink} />} />
        <Route path="/register" element={<RegisterProvider />} />
        <Route path="/error" element={<Error />} />
        <Route path="/auth" element={<Auth />} />
        {/* V2 routes */}
        <Route path="/v2/" element={<ProvidersV2/>} />
        <Route path="/v2/providers" element={<ProvidersV2/>} />     
        <Route path="/v2/error" element={<ErrorV2 />} />
        <Route path="/v2/register" element={<RegisterProviderV2 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
