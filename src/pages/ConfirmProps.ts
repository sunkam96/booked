import { BookingData } from "../common/BookingData";
import { ServiceItem } from "./ServicesProps";

export interface ConfirmProps {
    bookingData: BookingData;
    buttonText: string;
    serviceItem: ServiceItem;
}