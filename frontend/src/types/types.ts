import { ReactNode } from "react";

export interface IProduct{
    id: number;
    name: string;
    image: string | undefined;
    description: string;
    category: string;
    gender: string;
    cuantity: number;
    color: string;
    brand: string;
    size: number;
    stock: number | undefined;
    price: number;
    discount: number | undefined;
    finalPrice: number;
}

export interface ProductCardProps {
    image: string;
    price: number;
    title: string;
    subtitle: string;
  }

export interface IDirection{
    id: number;
    street: string;
    number: number;
    locality: string;
    city: string;
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