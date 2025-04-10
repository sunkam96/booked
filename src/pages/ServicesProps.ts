import { AppointmentBookingData } from "../common/AppointmentBooking";

export interface ServiceItemProps {
    service: string;
    description: string;
    price: string;
    checked: boolean;
}

export interface ServicesProp {
    bookingData: AppointmentBookingData;
    buttonText: string;
    serviceItems: ServiceItemProps[];
}