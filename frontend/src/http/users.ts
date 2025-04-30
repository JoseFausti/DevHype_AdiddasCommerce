import axios from "axios";
import { IUser } from "../types/types";
import { API_USERS_URL } from "../utils/consts";


export const getUsers = async (): Promise<IUser[] | {error: string}> => {
    try {
        const {data} = await axios.get<IUser[]>(`${API_USERS_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener los usuarios en getUsers: " + err,
        }
    }
}

export const postUser = async (user: IUser): Promise<IUser | {error: string}> => {
    try {
        const {data} = await axios.post<IUser>(`${API_USERS_URL}`, user);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear el usuario en postUser: " + err,
        }
    }
}

export const putUser = async (id: string, user: IUser): Promise<IUser | {error: string}> => {
    try {
        const {data} = await axios.put<IUser>(`${API_USERS_URL}/${id}`, user);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar el usuario en putUser: " + err,
        }
    }
}

export const deleteUser = async (id: string): Promise<IUser | {error: string}> => {
    try {
        const {data} = await axios.delete<IUser>(`${API_USERS_URL}/${id}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar el usuario en deleteUser: " + err,
        }
    }
}