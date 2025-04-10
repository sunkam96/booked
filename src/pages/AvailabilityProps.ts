import { BookingData } from "../common/BookingData";
import { ServiceItem } from "./ServicesProps";

export interface AvailabilityProps {
    bookingData: BookingData,
    serviceItem: ServiceItem;
}