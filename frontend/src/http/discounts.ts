import axios from "axios";
import { IDiscount } from "../types/types";
import { API_DISCOUNTS_URL } from "../utils/consts";


export const getDiscounts = async (): Promise<IDiscount[] | {error: string}> => {
    try {
        const {data} = await axios.get<IDiscount[]>(`${API_DISCOUNTS_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los descuentos en getDiscounts: " + err,
        }
    }
}

export const postDiscount = async (discount: IDiscount): Promise<IDiscount | {error: string}> => {
    try {
        const {data} = await axios.post<IDiscount>(`${API_DISCOUNTS_URL}`, discount);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el descuento en postDiscount: " + err,
        }
    }
}

export const putDiscount = async (id: string, discount: IDiscount): Promise<IDiscount | {error: string}> => {
    try {
        const {data} = await axios.put<IDiscount>(`${API_DISCOUNTS_URL}/${id}`, discount);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el descuento en putDiscount: " + err,
        }
    }
}

export const deleteDiscount = async (id: string): Promise<IDiscount | {error: string}> => {
    try {
        const {data} = await axios.delete<IDiscount>(`${API_DISCOUNTS_URL}/${id}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el descuento en deleteDiscount: " + err,
        }
    }
}