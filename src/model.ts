export interface ServicesProp {
    bookingData: BookingData;
    buttonText: string;
    serviceItems: ServiceItem[];
}

export interface AvailabilityProps {
    bookingData: BookingData,
    serviceItem: ServiceItem;
}

export interface ConfirmProps {
    bookingData: BookingData;
    buttonText: string;
    serviceItem: ServiceItem;
}

export interface CommonHeaderProps {
    showBack: boolean,
    backLink: string,
    headerText: string,
}

export interface CommonButtonProps {
    buttonText: string;
    link: string;
    onClick?: (evt: any) => void,
}

export interface ServiceItem {
    service: string;
    description: string;
    price: string;
    checked: boolean;
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

export class BookingData {
    _serviceItem?: ServiceItem;
    _selectedDate?: Date;
    _selectedSlot?: AvailabilitySlot;
    _customer?: CustomerInfo;

    constructor(selectedDate?: Date, serviceItem?: ServiceItem, customer?: CustomerInfo, selectedSlot?: AvailabilitySlot){
        this._selectedDate = selectedDate;
        this._serviceItem = serviceItem;
        this._selectedSlot = selectedSlot;
        this._customer = customer;
    }

    get serviceItem(): ServiceItem | undefined {
        return this._serviceItem;
    }

    set serviceItem(value: ServiceItem){
        this._serviceItem = value;
    }

    get selectedDate(): Date | undefined {
        return this._selectedDate;
    }

    set selectedDate(value: Date){
        this.selectedDate = value;
    }

    get selectedSlot(): AvailabilitySlot | undefined {
        return this._selectedSlot;
    }

    set selectedSlot(value: AvailabilitySlot){
        this._selectedSlot = value;
    }

    get customer(): CustomerInfo | undefined {
        return this._customer;
    }
    
    set customer(value: CustomerInfo){
        this._customer = value;
    }
    
}
