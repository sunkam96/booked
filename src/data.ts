import { ServiceItem } from "./model";

interface ICustomer {
    name: string;
    email: string;
    phone: string;
}

interface IProvider {
    name: string;
    id: number;
    description: string;
    services: IServiceItem[];
}

interface IServiceItem {
    service: string;
    description: string;
    price: number;
    time: number; // minutes
}

interface IBookingData {
    datetime: Date;
    serviceItem: IServiceItem | null;
    customer: ICustomer | null;
    provider: IProvider | null;
}

export class Customer implements ICustomer {
    private _name: string;
    private _email: string;
    private _phone: string;

    constructor(name: string, email: string, phone: string) {
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }
}

export class Provider implements IProvider {
    private _name: string;
    private _id: number;
    private _description: string;
    private _services: IServiceItem[];

    constructor(name: string, id: number, description: string, services: IServiceItem[]) {
        this._name = name;
        this._id = id;
        this._description = description;
        this._services = services;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get services(): IServiceItem[] {
        return this._services;
    }

    set services(value: IServiceItem[]) {
        this._services = value;
    }
}

export class ServiceItem implements IServiceItem {
    private _service: string;
    private _description: string;
    private _price: number;
    private _time: number;

    constructor(service: string, description: string, price: number, time: number) {
        this._service = service;
        this._description = description;
        this._price = price;
        this._time = time;
    }

    get service(): string {
        return this._service;
    }

    set service(value: string) {
        this._service = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get time(): number {
        return this._time;
    }

    set time(value: number) {
        this._time = value;
    }
}

export class BookingData implements IBookingData {
    private _datetime: Date;
    private _serviceItem: IServiceItem | null;
    private _customer: ICustomer | null;
    private _provider: IProvider | null;

    constructor(datetime: Date, serviceItem: IServiceItem | null, customer: ICustomer | null, provider: IProvider | null) {
        this._datetime = datetime;
        this._serviceItem = serviceItem;
        this._customer = customer;
        this._provider = provider;
    }

    get datetime(): Date {
        return this._datetime;
    }

    set datetime(value: Date) {
        this._datetime = value;
    }

    get serviceItem(): IServiceItem | null {
        return this._serviceItem;
    }

    set serviceItem(value: IServiceItem | null) {
        this._serviceItem = value;
    }

    get customer(): ICustomer | null {
        return this._customer;
    }

    set customer(value: ICustomer | null) {
        this._customer = value;
    }

    get provider(): IProvider | null {
        return this._provider;
    }

    set provider(value: IProvider | null) {
        this._provider = value;
    }
}