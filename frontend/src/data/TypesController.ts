import { deleteType, getTypes, postType, putType } from "../http/types";
import { IHttpResponse, IType } from "../types/types";


export const getAllTypes = async (): Promise<IHttpResponse<IType[]>> => {
    try {
        const types = await getTypes();
        if ('error' in types) {
            return {
                data: [],
                error: types.error,
                status: 404
            };
        }
        return {
            data: types,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllTypes: " + error,
            status: 500
        };
    }
}

export const getTypeById = async (id: string): Promise<IHttpResponse<IType | null>> => {
    try {
        const types = await getTypes();
        if ('error' in types) {
            return {
                data: null,
                error: types.error,
                status: 500
            };
        }
        const type = types.find(type => type.id === id);
        if (!type) {
            return {
                data: null,
                error: "No se encontró el tipo",
                status: 404
            };
        }
        return {
            data: type,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en getTypeById: " + error,
            status: 500
        };
    }
}

export const createType = async (newType: IType): Promise<IHttpResponse<IType | null>> => {
    try {
        const type = await postType(newType);
        if ('error' in type) {
            return {
                data: null,
                error: type.error,
                status: 500
            };
        }
        return {
            data: type,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createType: " + error,
            status: 500
        };
    }
}

export const updateType = async (id: string, updatedType: IType): Promise<IHttpResponse<IType | null>> => {
    try {
        const type = await putType(id, updatedType);
        if ('error' in type) {
            return {
                data: null,
                error: type.error,
                status: 500
            };
        }
        return {
            data: type,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updateType: " + error,
            status: 500
        };
    }
}

export const deleteTypeById = async (id: string): Promise<IHttpResponse<IType | null>> => {
    try {
        const type = await deleteType(id);
        if ('error' in type) {
            return {
                data: null,
                error: type.error,
                status: 500
            };
        }
        return {
            data: type,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deleteTypeById: " + error,
            status: 500
        };
    }
}