import { deleteSize, getSizes, postSize, putSize } from "../http/sizes";
import { IHttpResponse, ISize } from "../types/types";

export const getAllSizes = async (): Promise<IHttpResponse<ISize[]>> => {
    try {
        const sizes = await getSizes();
        if ('error' in sizes) {
            return {
                data: [],
                error: sizes.error,
                status: 404
            };
        }
        return {
            data: sizes,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllSizes: " + error,
            status: 500
        }
    }
}

export const getSizeById = async (id: string): Promise<IHttpResponse<ISize | null>> => {
    try {
        const sizes = await getSizes();
        if ('error' in sizes) {
            return {
                data: null,
                error: sizes.error,
                status: 500
            };
        }
        const size = sizes.find(size => size.id === id);
        if (!size) {
            return {
                data: null,
                error: "No se encontró el talle",
                status: 404
            };
        }
        return {
            data: size,
            error: "",
            status: 200
        };
    } catch (err) {
        return {
            data: null,
            error: "Se produjo un error en getSizeById: " + err,
            status: 500
        }
    }
}

export const createSize = async (newSize: ISize): Promise<IHttpResponse<ISize | null>> => {
    try {
        const size = await postSize(newSize);
        if ('error' in size) {
            return {
                data: null,
                error: size.error,
                status: 500
            };
        }
        return {
            data: size,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createSize: " + error,
            status: 500
        }
    }
}

export const updateSize = async (id: string, updatedSize: ISize): Promise<IHttpResponse<ISize | null>> => {
    try {
        const size = await putSize(id, updatedSize);
        if ('error' in size) {
            return {
                data: null,
                error: size.error,
                status: 500
            };
        }
        return {
            data: size,
            error: "",
            status: 200
        };
    }catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updateSize: " + error,
            status: 500
        }
    }
}

export const deleteSizeById = async (id: string): Promise<IHttpResponse<ISize | null>> => {
    try {
        const size = await deleteSize(id);
        if ('error' in size) {
            return {
                data: null,
                error: size.error,
                status: 500
            };
        }
        return {
            data: size,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deleteSizeById: " + error,
            status: 500
        }
    }
}
