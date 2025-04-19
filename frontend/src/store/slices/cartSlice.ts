import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/types";

const initialState: {cart: IProduct[], productActive: IProduct | null}= {
    cart: [],
    productActive: null,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCart: (state, action: PayloadAction<IProduct[]>) => {state.cart = action.payload},
        setProductActive: (state, action: PayloadAction<IProduct | null>) => {state.productActive = action.payload},
        clearCart: (state) => {state.cart = []},
        addProduct: (state, action: PayloadAction<IProduct>) => {state.cart.push(action.payload);},
        editProduct: (state, action: PayloadAction<IProduct>) => {state.cart = state.cart.map((product: IProduct) => product.id === action.payload.id ? action.payload : product);},
        removeProduct: (state, action: PayloadAction<IProduct>) => {state.cart.filter((product: IProduct) => product.id !== action.payload.id);}
    }
})

export const { setCart, clearCart, addProduct, editProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;