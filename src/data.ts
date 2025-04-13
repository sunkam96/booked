import {ServiceItem, ServicesProp } from './model.ts'

const baseServicesProps: ServicesProp = {
  serviceItems: [
    new ServiceItem("Haircut", "Adult haircut", 25),
    new ServiceItem("Haircut and trim", "Adult haircut with beard trimming", 30),
    new ServiceItem("Color", "Coloring and perm", 40),
  ]
}

export {baseServicesProps}