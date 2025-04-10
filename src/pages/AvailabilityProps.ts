import { AppointmentBookingData } from "../common/AppointmentBooking";
import { ServiceItemProps } from "./ServicesProps";

export interface AvailabilityProps {
    bookingData: AppointmentBookingData,
    serviceItem: ServiceItemProps;
}