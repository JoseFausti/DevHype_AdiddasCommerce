import { deleteDetail, getDetails, postDetail, putDetail } from "../http/details";
import { IDetail, IHttpResponse } from "../types/types";

export const getAllDetails = async (): Promise<IHttpResponse<IDetail[]>> => {
    try {
        const details = await getDetails();
        if ('error' in details) {
            return {
                data: [],
                error: details.error,
                status: 404
            };
        }
        return {
            data: details,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllDetails: " + error,
            status: 500
        };
    }
}

export const findDetailById = async(id: string): Promise<IHttpResponse<IDetail | null>> => {
    try {
        const details = await getDetails();
        if ('error' in details) {
            return {
                data: null,
                error: details.error,
                status: 500
            };
        }
        const detail = details.find(detail => detail.id === id);
        if (!detail) {
            return {
                data: null,
                error: "No se encontró el detalle",
                status: 404
            };
        }
        return {
            data: detail,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en findDetailById: " + error,
            status: 500
        };
    }
}

// Función para crear un nuevo detalle
export const createDetail = async(newDetail: IDetail): Promise<IHttpResponse<IDetail | null>> => {
    try {
        const detail = await postDetail(newDetail);
        if ('error' in detail) {
            return {
                data: null,
                error: detail.error,
                status: 500
            };
        }
        return {
            data: detail,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createDetail: " + error,
            status: 500
        };
    }
}

export const updateDetail = async(id: string, updatedDetail: IDetail): Promise<IHttpResponse<IDetail | null>> => {
    try {
        const detail = await putDetail(id, updatedDetail);
        if ('error' in detail) {
            return {
                data: null,
                error: detail.error,
                status: 500
            };
        }
        return {
            data: detail,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updateDetail: " + error,
            status: 500
        };
    }
}

// Función para eliminar un detalle por ID
export const deleteDetailById = async(id: string): Promise<IHttpResponse<IDetail | null>> => {
    try {
        const detail = await deleteDetail(id);
        if ('error' in detail) {
            return {
                data: null,
                error: detail.error,
                status: 500
            };
        }
        return {
            data: detail,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deleteDetailById: " + error,
            status: 500
        };
    }
}
