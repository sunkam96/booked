import {ServicesProp} from './pages/ServicesProps.ts'
import { ConfirmProps } from './pages/ConfirmProps.ts'
import { AppointmentBookingData } from './common/AppointmentBooking.ts'
import { AvailabilityProps } from './pages/AvailabilityProps.ts'


const initialAppointmentBookingData: AppointmentBookingData = {
  selectedDate: new Date(),
}

const baseServicesProps: ServicesProp = {
  bookingData: initialAppointmentBookingData,
  buttonText: "Book Now",
  serviceItems: [
    {
      service: "Haircut",
      description: "Adult haircut",
      price: "$25",
      checked: true
    },
    {
      service: "Haircut and trim",
      description: "Adult haircut with beard trimming",
      price: "$35",
      checked: false
    },
    {
      service: "Color",
      description: "Coloring and perm",
      price: "$40",
      checked: false
    }
  ]
}

const baseConfirmProps: ConfirmProps = {
  bookingData: initialAppointmentBookingData,
  buttonText: "Confirm",
  serviceItem: {
    service: "Haircut",
    description: "Adult haircut",
    price: "$25",
    checked: true
  }
}

const baseAvailabilityProps: AvailabilityProps = {
  bookingData: initialAppointmentBookingData,
  serviceItem: {
    service: "Haircut",
    description: "Adult haircut",
    price: "$25",
    checked: true
  }
}

export {baseConfirmProps, baseServicesProps, baseAvailabilityProps}