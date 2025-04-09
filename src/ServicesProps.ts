export interface ServiceItemProps {
    service: string;
    description: string;
    price: string;
    checked: boolean;
}

export interface ServicesProp {
    date: Date;
    buttonText: string;
    serviceItems: ServiceItemProps[];
}