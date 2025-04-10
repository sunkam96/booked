import App from './App.tsx'
import Services from './pages/Services.tsx'
import Confirm from './pages/Confirm.tsx'
import Booked from './pages/Booked.tsx'
import Availability from './pages/Availability.tsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import { baseServicesProps, baseConfirmProps, baseAvailabilityProps } from './data.ts'

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Services {...baseServicesProps} />} />
      <Route path="/home" element={<App />} />  {/* old home page keeping just in case */}
      <Route path="/services" element={<Services {...baseServicesProps} />} />
      <Route path="/availability" element={<Availability {...baseAvailabilityProps} />} />
      <Route path="/confirm" element={<Confirm {...baseConfirmProps}/>} />
      <Route path="/booked" element={<Booked/>} />
    </Routes>
  </BrowserRouter>
);