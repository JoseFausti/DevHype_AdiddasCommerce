import axios from "axios";
import { IDetail } from "../types/types"
import { API_DETAILS_URL } from "../utils/consts"

export const getDetails = async (): Promise<IDetail[] | {error: string}> => {
    try {
        const {data} = await axios.get<IDetail[]>(`${API_DETAILS_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los detalles en getDetails: " + err,
        }
    }
}

export const postDetail = async (detail: IDetail): Promise<IDetail | {error: string}> => {
    try {
        const {data} = await axios.post<IDetail>(`${API_DETAILS_URL}`, detail);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el detalle en postDetail: " + err,
        }
    }
}

export const putDetail = async (id: string, detail: IDetail): Promise<IDetail | {error: string}> => {
    try {
        const {data} = await axios.put<IDetail>(`${API_DETAILS_URL}/${id}`, detail);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el detalle en putDetail: " + err,
        }
    }
}

export const deleteDetail = async (id: string): Promise<IDetail | {error: string}> => {
    try {
        const {data} = await axios.delete<IDetail>(`${API_DETAILS_URL}/${id}`);
        return data
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el detalle en deleteDetail: " + err,
        }
    }
}