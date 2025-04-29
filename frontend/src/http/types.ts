import axios from "axios";
import { IType } from "../types/types";
import { API_TYPES_URL } from "../utils/consts";


export const getTypes = async (): Promise<IType[] | {error: string}> => {
    try {
        const {data} = await axios.get<IType[]>(`${API_TYPES_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los tipos en getTypes: " + err,
        }
    }
}

export const postType = async (type: IType): Promise<IType | {error: string}> => {
    try {
        const {data} = await axios.post<IType>(`${API_TYPES_URL}`, type);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el tipo en postType: " + err,
        }
    }
}

export const putType = async (id: string, type: IType): Promise<IType | {error: string}> => {
    try {
        const {data} = await axios.put<IType>(`${API_TYPES_URL}/${id}`, type);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el tipo en putType: " + err,
        }
    }
}

export const deleteType = async (id: string): Promise<IType | {error: string}> => {
    try {
        const {data} = await axios.delete<IType>(`${API_TYPES_URL}/${id}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el tipo en deleteType: " + err,
        }
    }
}