import {ServicesProp} from './ServicesProps.ts'
import { ConfirmProps } from './ConfirmProps.ts'

const baseServicesProps: ServicesProp = {
  date: new Date(1744639200 * 1000),
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
  date: new Date(1744639200 * 1000),
  buttonText: "Confirm",
  serviceItem: {
    service: "Haircut",
    description: "Adult haircut",
    price: "$25",
    checked: true
  }
}


export {baseConfirmProps, baseServicesProps}