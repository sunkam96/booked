import { BookingData } from "../common/BookingData";

export interface ServiceItem {
    service: string;
    description: string;
    price: string;
    checked: boolean;
}

export interface ServicesProp {
    bookingData: BookingData;
    buttonText: string;
    serviceItems: ServiceItem[];
}