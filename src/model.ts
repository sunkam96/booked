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
        this._selectedDate = value;
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

    toString(): string {
        let result = "BookingData";
        if (this.serviceItem) {
            result += " service: "+this.serviceItem.toString()
        }
        else {
            result += " service: no service yet"
        }
        if (this.selectedDate){
            result += " date: "+ this.selectedDate.toLocaleDateString()
        }
        else {
            result += " date: no date yet"
        }
        if (this.selectedSlot){
            result += " slot: start "+ this.selectedSlot.startTime.toLocaleTimeString() + " end "+this.selectedSlot.endTime.toLocaleTimeString()
        }
        else {
            result += " slot: no date yet"
        }
        if (this.customer) {
            result += " customer: "+this.customer.toString()
        }
        else {
            result += " customer: no customer yet"
        }
        return result
    }
    
}

export interface ServicesProp {
    buttonText: string;
    serviceItems: ServiceItem[];
}

export class ServiceItem {
    _service: string;
    _description: string;
    _price: number;

    constructor(service: string, description: string, price: number){
        this._service = service;
        this._description = description;
        this._price = price;
    }

    toString(): string {
        return "ServiceItem service: "+this._service
    }

    get service(): string {
        return this._service
    }

    get description(): string {
        return this._description
    }

    get price(): number {
        return this._price
    }
}

export interface AvailabilityProps {
    serviceItem: ServiceItem;
}

export interface ConfirmProps {
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

export interface CustomerInfo {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
}

export class AvailabilitySlot {
    _startTime: Date;
    _endTime: Date;

    constructor(startTime: Date, endTime: Date){
        this._startTime = startTime
        this._endTime = endTime
    }

    toString(): string {
        return this._startTime.toLocaleTimeString() + " "+ this._endTime.toLocaleTimeString()
    }

    get startTime(): Date {
        return this._startTime
    }

    get endTime(): Date {
        return this._endTime
    }
}