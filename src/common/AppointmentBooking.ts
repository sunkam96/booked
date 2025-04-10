export interface AppointmentBookingData {
    customer?: CustomerInfo,
    selectedDate?: Date,
    selectedSlot?: AvailabilitySlot,
}

export interface CustomerInfo {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
}

export interface AvailabilitySlot {
    startTime: Date,
    endTime: Date,
}
