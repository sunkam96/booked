import { ServiceItemProps } from "./ServicesProps";

export interface AvailabilityProps {
    date: Date;
    buttonText: string;
    serviceItem: ServiceItemProps;
}

export interface AvailabilitySlot {
    startTime: Date
}