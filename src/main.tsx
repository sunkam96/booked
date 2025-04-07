import App from './App.tsx'
import Services from './Services.tsx'
import Confirm from './Confirm.tsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/services" element={<Services />} />
    <Route path="/confirm" element={<Confirm />} />
    </Routes>
  </BrowserRouter>
);