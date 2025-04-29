import axios from "axios";
import { ISize } from "../types/types";
import { API_SIZES_URL } from "../utils/consts";


export const getSizes = async (): Promise<ISize[] | {error: string}> => {
    try {
        const {data} = await axios.get<ISize[]>(`${API_SIZES_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los talles en getSizes: " + err,
        }
    }
}

export const postSize = async (size: ISize): Promise<ISize | {error: string}> => {
    try {
        const {data} = await axios.post<ISize>(`${API_SIZES_URL}`, size);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el talle en postSize: " + err,
        }
    }
}

export const putSize = async (id: string, size: ISize): Promise<ISize | {error: string}> => {
    try {
        const {data} = await axios.put<ISize>(`${API_SIZES_URL}/${id}`, size);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el talle en putSize: " + err,
        }
    }
} 

export const deleteSize = async (id: string): Promise<ISize | {error: string}> => {
    try {
        const {data} = await axios.delete<ISize>(`${API_SIZES_URL}/${id}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el talle en deleteSize: " + err,
        }
    }
}