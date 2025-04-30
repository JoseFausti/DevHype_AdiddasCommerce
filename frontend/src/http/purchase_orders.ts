import axios from "axios";
import { IPurchaseOrder } from "../types/types";
import { API_PURCHASE_ORDERS_URL } from "../utils/consts";


export const getPurchaseOrders = async (): Promise<IPurchaseOrder[] | {error: string}> => {
    try {
        const {data} = await axios.get<IPurchaseOrder[]>(`${API_PURCHASE_ORDERS_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los productos en getPurchaseOrders: " + err,
        }
    }
}

export const postPurchaseOrder = async (purchase_order: IPurchaseOrder): Promise<IPurchaseOrder | {error: string}> => {
    try {
        const {data} = await axios.post<IPurchaseOrder>(`${API_PURCHASE_ORDERS_URL}`, purchase_order);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el producto en postPurchaseOrder: " + err,
        }
    }
}

export const putPurchaseOrder = async (id: string, purchase_order: IPurchaseOrder): Promise<IPurchaseOrder | {error: string}> => {
    try {
        const {data} = await axios.put<IPurchaseOrder>(`${API_PURCHASE_ORDERS_URL}/${id}`, purchase_order);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el producto en putPurchaseOrder: " + err,
        }
    }
}

export const deletePurchaseOrder = async (id: string): Promise<IPurchaseOrder | {error: string}> => {
    try {
        const {data} = await axios.delete<IPurchaseOrder>(`${API_PURCHASE_ORDERS_URL}/${id}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el producto en deletePurchaseOrder: " + err,
        }
    }
}