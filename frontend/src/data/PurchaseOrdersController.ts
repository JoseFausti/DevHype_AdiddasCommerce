import { deletePurchaseOrder, getPurchaseOrders, postPurchaseOrder, putPurchaseOrder } from "../http/purchase_orders";
import { IPurchaseOrder, IHttpResponse } from "../types/types";

export const getAllPurchaseOrders = async (): Promise<IHttpResponse<IPurchaseOrder[]>> => {
    try {
        const purchaseOrders = await getPurchaseOrders();
        if ('error' in purchaseOrders) {
            return {
                data: [],
                error: purchaseOrders.error,
                status: 404
            };
        }
        return {
            data: purchaseOrders,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllPurchaseOrders: " + error,
            status: 500
        };
    }
}

export const findPurchaseOrderById = async(id: string): Promise<IHttpResponse<IPurchaseOrder | null>> => {
    try {
        const purchaseOrders = await getPurchaseOrders();
        if ('error' in purchaseOrders) {
            return {
                data: null,
                error: purchaseOrders.error,
                status: 500
            };
        }
        const purchaseOrder = purchaseOrders.find(order => order.id === id);
        if (!purchaseOrder) {
            return {
                data: null,
                error: "No se encontró la orden de compra",
                status: 404
            };
        }
        return {
            data: purchaseOrder,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en findPurchaseOrderById: " + error,
            status: 500
        };
    }
}

export const createPurchaseOrder = async(newPurchaseOrder: IPurchaseOrder): Promise<IHttpResponse<IPurchaseOrder | null>> => {
    try {
        const purchaseOrder = await postPurchaseOrder(newPurchaseOrder);
        if ('error' in purchaseOrder) {
            return {
                data: null,
                error: purchaseOrder.error,
                status: 500
            };
        }
        return {
            data: purchaseOrder,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createPurchaseOrder: " + error,
            status: 500
        };
    }
}

export const updatePurchaseOrder = async(id: string, updatedPurchaseOrder: IPurchaseOrder): Promise<IHttpResponse<IPurchaseOrder | null>> => {
    try {
        const purchaseOrder = await putPurchaseOrder(id, updatedPurchaseOrder);
        if ('error' in purchaseOrder) {
            return {
                data: null,
                error: purchaseOrder.error,
                status: 500
            };
        }
        return {
            data: purchaseOrder,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updatePurchaseOrder: " + error,
            status: 500
        };
    }
}

export const deletePurchaseOrderById = async(id: string): Promise<IHttpResponse<IPurchaseOrder | null>> => {
    try {
        const purchaseOrder = await deletePurchaseOrder(id);
        if ('error' in purchaseOrder) {
            return {
                data: null,
                error: purchaseOrder.error,
                status: 500
            };
        }
        return {
            data: purchaseOrder,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deletePurchaseOrderById: " + error,
            status: 500
        };
    }
}
