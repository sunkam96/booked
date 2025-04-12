import { BookingData, ServicesProp, ConfirmProps, AvailabilityProps } from './model.ts'


const initialBookingData: BookingData = new BookingData(new Date());

const baseServicesProps: ServicesProp = {
  bookingData: initialBookingData,
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
  bookingData: initialBookingData,
  buttonText: "Confirm",
  serviceItem: {
    service: "Haircut",
    description: "Adult haircut",
    price: "$25",
    checked: true
  }
}

const baseAvailabilityProps: AvailabilityProps = {
  bookingData: initialBookingData,
  serviceItem: {
    service: "Haircut",
    description: "Adult haircut",
    price: "$25",
    checked: true
  }
}

export {initialBookingData, baseConfirmProps, baseServicesProps, baseAvailabilityProps}