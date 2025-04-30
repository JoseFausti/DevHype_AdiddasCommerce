import axios from "axios";
import { IColor } from "../types/types"
import { API_COLORS_URL } from "../utils/consts"

export const getColors = async (): Promise<IColor[] | {error: string}> => {
    try {
        const {data} = await axios.get<IColor[]>(`${API_COLORS_URL}`);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al obtener las imagenes de los colores en getColors: " + err,
        }
    }
}

export const postColor = async (colorImg: IColor): Promise<IColor | {error: string}> => {
    try {
        const {data} = await axios.post<IColor>(`${API_COLORS_URL}`, colorImg);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al crear la imagen del color en postDetail: " + err,
        }
    }
}

export const putColor = async (id: string, colorImg: IColor): Promise<IColor | {error: string}> => {
    try {
        const {data} = await axios.put<IColor>(`${API_COLORS_URL}/${id}`, colorImg);
        return data;
    } catch (err) {
        return {
            error: "Se produjo un error al actualizar la imagen del color en putColor: " + err,
        }
    }
}

export const deleteColor = async (id: string): Promise<IColor | {error: string}> => {
    try {
        const {data} = await axios.delete<IColor>(`${API_COLORS_URL}/${id}`);
        return data
    } catch (err) {
        return {
            error: "Se produjo un error al eliminar la imagen del color en deleteColor: " + err,
        }
    }
}