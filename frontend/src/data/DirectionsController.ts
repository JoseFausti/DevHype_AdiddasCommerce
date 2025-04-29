import { deleteDirection, getDirections, postDirection, putDirection } from "../http/directions";
import { IDirection, IHttpResponse } from "../types/types";

export const getAllDirections = async (): Promise<IHttpResponse<IDirection[]>> => {
    try {
        const directions = await getDirections();
        if ('error' in directions) {
            return {
                data: [],
                error: directions.error,
                status: 404
            };
        }
        return {
            data: directions,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllDirections: " + error,
            status: 500
        };
    }
}

export const findDirectionById = async(id: string): Promise<IHttpResponse<IDirection | null>> => {
    try {
        const directions = await getDirections();
        if ('error' in directions) {
            return {
                data: null,
                error: directions.error,
                status: 500
            };
        }
        const direction = directions.find(direction => direction.id === id);
        if (!direction) {
            return {
                data: null,
                error: "No se encontró la dirección",
                status: 404
            };
        }
        return {
            data: direction,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en findDirectionById: " + error,
            status: 500
        };
    }
}

export const createDirection = async(newDirection: IDirection): Promise<IHttpResponse<IDirection | null>> => {
    try {
        const direction = await postDirection(newDirection);
        if ('error' in direction) {
            return {
                data: null,
                error: direction.error,
                status: 500
            };
        }
        return {
            data: direction,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createDirection: " + error,
            status: 500
        };
    }
}

export const updateDirection = async(id: string, updatedDirection: IDirection): Promise<IHttpResponse<IDirection | null>> => {
    try {
        const direction = await putDirection(id, updatedDirection);
        if ('error' in direction) {
            return {
                data: null,
                error: direction.error,
                status: 500
            };
        }
        return {
            data: direction,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updateDirection: " + error,
            status: 500
        };
    }
}

export const deleteDirectionById = async(id: string): Promise<IHttpResponse<IDirection | null>> => {
    try {
        const direction = await deleteDirection(id);
        if ('error' in direction) {
            return {
                data: null,
                error: direction.error,
                status: 500
            };
        }
        return {
            data: direction,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deleteDirectionById: " + error,
            status: 500
        };
    }
}
