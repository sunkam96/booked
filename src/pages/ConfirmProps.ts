import { AppointmentBookingData } from "../common/AppointmentBooking";
import { ServiceItemProps } from "./ServicesProps";

export interface ConfirmProps {
    bookingData: AppointmentBookingData;
    buttonText: string;
    serviceItem: ServiceItemProps;
}