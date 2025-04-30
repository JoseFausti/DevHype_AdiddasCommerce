import { deleteDiscount, getDiscounts, postDiscount, putDiscount } from "../http/discounts";
import { IDiscount, IHttpResponse } from "../types/types";

export const getAllDiscounts = async (): Promise<IHttpResponse<IDiscount[]>> => {
    try {
        const discounts = await getDiscounts();
        if ('error' in discounts) {
            return {
                data: [],
                error: discounts.error,
                status: 404
            };
        }
        return {
            data: discounts,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllDiscounts: " + error,
            status: 500
        };
    }
}

export const findDiscountById = async(id: string): Promise<IHttpResponse<IDiscount | null>> => {
    try {
        const discounts = await getDiscounts();
        if ('error' in discounts) {
            return {
                data: null,
                error: discounts.error,
                status: 500
            };
        }
        const discount = discounts.find(discount => discount.id === id);
        if (!discount) {
            return {
                data: null,
                error: "No se encontró el descuento",
                status: 404
            };
        }
        return {
            data: discount,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en findDiscountById: " + error,
            status: 500
        };
    }
}

export const createDiscount = async(newDiscount: IDiscount): Promise<IHttpResponse<IDiscount | null>> => {
    try {
        const discount = await postDiscount(newDiscount);
        if ('error' in discount) {
            return {
                data: null,
                error: discount.error,
                status: 500
            };
        }
        return {
            data: discount,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createDiscount: " + error,
            status: 500
        };
    }
}

// Actualizar descuento
export const updateDiscount = async(id: string, updatedDiscount: IDiscount): Promise<IHttpResponse<IDiscount | null>> => {
    try {
        const discount = await putDiscount(id, updatedDiscount);
        if ('error' in discount) {
            return {
                data: null,
                error: discount.error,
                status: 500
            };
        }
        return {
            data: discount,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updateDiscount: " + error,
            status: 500
        };
    }
}

export const deleteDiscountById = async(id: string): Promise<IHttpResponse<IDiscount | null>> => {
    try {
        const discount = await deleteDiscount(id);
        if ('error' in discount) {
            return {
                data: null,
                error: discount.error,
                status: 500
            };
        }
        return {
            data: discount,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deleteDiscountById: " + error,
            status: 500
        };
    }
}
