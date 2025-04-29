import { deleteProduct, getProducts, postProduct, putProduct } from "../http/products";
import { IProduct, IHttpResponse } from "../types/types";

export const getAllProducts = async (): Promise<IHttpResponse<IProduct[]>> => {
    try {
        const products = await getProducts();
        if ('error' in products) {
            return {
                data: [],
                error: products.error,
                status: 404
            };
        }
        return {
            data: products,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: [],
            error: "Se produjo un error en getAllProducts: " + error,
            status: 500
        };
    }
}

export const findProductById = async(id: string): Promise<IHttpResponse<IProduct | null>> => {
    try {
        const products = await getProducts();
        if ('error' in products) {
            return {
                data: null,
                error: products.error,
                status: 500
            };
        }
        const product = products.find(product => product.id === id);
        if (!product) {
            return {
                data: null,
                error: "No se encontró el producto",
                status: 404
            };
        }
        return {
            data: product,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en findProductById: " + error,
            status: 500
        };
    }
}

export const createProduct = async(newProduct: IProduct): Promise<IHttpResponse<IProduct | null>> => {
    try {
        const product = await postProduct(newProduct);
        if ('error' in product) {
            return {
                data: null,
                error: product.error,
                status: 500
            };
        }
        return {
            data: product,
            error: "",
            status: 201
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en createProduct: " + error,
            status: 500
        };
    }
}

export const updateProduct = async(id: string, updatedProduct: IProduct): Promise<IHttpResponse<IProduct | null>> => {
    try {
        const product = await putProduct(id, updatedProduct);
        if ('error' in product) {
            return {
                data: null,
                error: product.error,
                status: 500
            };
        }
        return {
            data: product,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en updateProduct: " + error,
            status: 500
        };
    }
}

export const deleteProductById = async(id: string): Promise<IHttpResponse<IProduct | null>> => {
    try {
        const product = await deleteProduct(id);
        if ('error' in product) {
            return {
                data: null,
                error: product.error,
                status: 500
            };
        }
        return {
            data: product,
            error: "",
            status: 200
        };
    } catch (error) {
        return {
            data: null,
            error: "Se produjo un error en deleteProductById: " + error,
            status: 500
        };
    }
}
