import axios from "axios";
import { IDirection } from "../types/types";
import { API_DIRECTIONS_URL } from "../utils/consts";

export const getDirections = async(): Promise<IDirection[] | {error: string}> => {
    try {
        const {data} = await axios.get<IDirection[]>(`${API_DIRECTIONS_URL}`);
        return data
    } catch (err) {
        return {
            error: "Se produjo un error al obtener las direcciones en getDirections: " + err,
        }
    }
}

export const postDirection = async (direction: IDirection): Promise<IDirection | {error: string}> => {
    try {
        const {data} = await axios.post<IDirection>(`${API_DIRECTIONS_URL}`, direction);
        return data
    } catch (err) {
        return {
            error: "Se produjo un error al crear la direccion en postDirection: " + err,
        }
    }
}

export const putDirection = async (id: string, direction: IDirection): Promise<IDirection | {error: string}> => {
    try {
        const {data} = await axios.put<IDirection>(`${API_DIRECTIONS_URL}/${id}`, direction);
        return data
    } catch (err) {
        return{
            error: "Se produjo un error al actualizar la direccion en putDirection: " + err,
        }
    }
}

export const deleteDirection = async (id: string): Promise<IDirection | {error: string}> => {
    try {
        const {data} = await axios.delete<IDirection>(`${API_DIRECTIONS_URL}/${id}`);
        return data
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar la direccion en deleteDirection: " + err,
        }
    }
}