import { ReactNode } from "react";

export interface IProduct{
    id: number;
    name: string;
    image: string | undefined;
    description: string;
    category: string;
    cuantity: number;
    color: string;
    brand: string;
    waist: number;
    stock: number | undefined;
    price: number;
    discount: number | undefined;
    finalPrice: number;
}

export interface IDirection{
    id: number;
    street: string;
    number: number;
    city: string;
    state: string;
    country: string;
    postalCode: number;
}

export interface IUser{
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    address: IDirection
}

export interface ChildrenProps {
    children: ReactNode;
}