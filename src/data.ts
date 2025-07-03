export class Customer{
    private _name: string | null;
    private _email: string | null;
    private _phone: string | null;

    constructor(name: string | null, email: string | null, phone: string | null) {
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get name(): string | null {
        return this._name;
    }

    set name(value: string | null) {
        this._name = value;
    }

    get email(): string | null {
        return this._email;
    }

    set email(value: string | null) {
        this._email = value;
    }

    get phone(): string | null {
        return this._phone;
    }

    set phone(value: string | null) {
        this._phone = value;
    }
}

export class Provider{
    private _name: string | null;
    private _id: number | null;
    private _description: string | null;
    private _services: ServiceItem[] | null;

    constructor(name: string | null, id: number | null, description: string | null, services: ServiceItem[] | null) {
        this._name = name;
        this._id = id;
        this._description = description;
        this._services = services;
    }

    get name(): string | null {
        return this._name;
    }

    set name(value: string | null) {
        this._name = value;
    }

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    get description(): string | null {
        return this._description;
    }

    set description(value: string | null) {
        this._description = value;
    }

    get services(): ServiceItem[] | null {
        return this._services;
    }

    set services(value: ServiceItem[] | null) {
        this._services = value;
    }
}

export class ServiceItem{
    private _service: string | null;
    private _description: string | null;
    private _price: number | null;
    private _time: number | null;

    constructor(service: string | null, description: string | null, price: number | null, time: number | null) {
        this._service = service;
        this._description = description;
        this._price = price;
        this._time = time;
    }

    get service(): string | null {
        return this._service;
    }

    set service(value: string | null) {
        this._service = value;
    }

    get description(): string | null {
        return this._description;
    }

    set description(value: string | null) {
        this._description = value;
    }

    get price(): number | null {
        return this._price;
    }

    set price(value: number | null) {
        this._price = value;
    }

    get time(): number | null {
        return this._time;
    }

    set time(value: number | null) {
        this._time = value;
    }
}

export class BookingData{
    private _bookingDate: Date | null;
    private _serviceDate: Date | null;
    private _serviceItem: ServiceItem | null;
    private _customer:  Customer | null;
    private _provider:  Provider | null;

    constructor(bookingDate: Date | null, serviceDate: Date | null, serviceItem: ServiceItem | null, customer:  Customer | null, provider:  Provider | null) {
        this._bookingDate = bookingDate;
        this._serviceDate = serviceDate;
        this._serviceItem = serviceItem;
        this._customer = customer;
        this._provider = provider;
    }

    get bookingDate(): Date | null {
        return this._bookingDate;
    }

    set bookingDate(value: Date | null) {
        this._bookingDate = value;
    }

    get serviceDate(): Date | null {
        return this._serviceDate;
    }

    set serviceDate(value: Date | null) {
        this._serviceDate = value;
    }

    get serviceItem(): ServiceItem | null {
        return this._serviceItem;
    }

    set serviceItem(value: ServiceItem | null) {
        this._serviceItem = value;
    }

    get customer():  Customer | null {
        return this._customer;
    }

    set customer(value:  Customer | null) {
        this._customer = value;
    }

    get provider():  Provider | null {
        return this._provider;
    }

    set provider(value:  Provider | null) {
        this._provider = value;
    }
}