import axios from "axios";
import { IProduct } from "../types/types";
import { API_PRODUCTS_URL } from "../utils/consts";


export const getProducts = async (): Promise<IProduct[] | {error: string}> => {
    try {
        const {data} = await axios.get<IProduct[]>(`${API_PRODUCTS_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los productos en getProducts: " + err,
        }
    }
}

export const postProduct = async (product: IProduct): Promise<IProduct | {error: string}> => {
    try {
        const {data} = await axios.post<IProduct>(`${API_PRODUCTS_URL}`, product);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el producto en postProduct: " + err,
        }
    }
}

export const putProduct = async (id: string, product: IProduct): Promise<IProduct | {error: string}> => {
    try {
        const {data} = await axios.put<IProduct>(`${API_PRODUCTS_URL}/${id}`, product);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el producto en putProduct: " + err,
        }
    }
}

export const deleteProduct = async (id: string): Promise<IProduct | {error: string}> => {
    try {
        const {data} = await axios.delete<IProduct>(`${API_PRODUCTS_URL}/${id}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el producto en deleteProduct: " + err,
        }
    }
}