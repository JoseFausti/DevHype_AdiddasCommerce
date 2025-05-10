import { ReactNode } from "react";
import { Role } from "../utils/enums";

// Interfaces
interface Base{
    id: string;
    deleted: boolean;
}

export interface IProduct extends Base{
    name: string;
    image: string | undefined;
    description: string;
    category: string;
    gender: string;
    cuantity: number;
    brand: string;
    stock: number | undefined;
    price: number;
    finalPrice: number;
    colorImg: IColor[];
    size: ISize[];
    discount: IDiscount[];
}

export interface IDiscount extends Base{
    initialDate: string;
    finalDate: string;
    percentage: number;
    products: IProduct[];
}

export interface IPurchaseOrder extends Base{
    date: string;
    totalPrice: number;
    paymentMethod: string;
    status: string;
    user: IUser;
    details: IDetail[];
}

export interface IDetail extends Base{
    cuantity: number;
    product: IProduct;
    purchase_order: IPurchaseOrder;
}

export interface IDirection extends Base{
    street: string;
    number: number;
    locality: string;
    city: string;
    country: string;
    postalCode: number;
    users: IUser[];
}

export interface IUser extends Base{
    username: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: Role;
    address: IDirection
}

export interface ICategory extends Base{
    name: string;
    products: IProduct[];
    types: IType[];
}

export interface IType extends Base{
    name: string;
    category: ICategory;
}

export interface ISize extends Base{
    size: number;
    products: IProduct[];
}

export interface IColor extends Base{
    colorImg: string;
    products: IProduct[];
}

// Props
export interface ChildrenProps {
    children: ReactNode;
}

// Http props
export interface IHttpResponse<E> {
    data: E | Partial<E>;
    error: string;
    status: number;
}