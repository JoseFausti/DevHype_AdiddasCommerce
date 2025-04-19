import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/types";


const initialState: {users: IUser[], userActive: IUser | null} = {
    users: [],
    userActive: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {state.users = action.payload},
        setUserActive: (state, action: PayloadAction<IUser | null>) => {state.userActive = action.payload},
        clearUsers: (state) => {state.users = []},
        addUser: (state, action: PayloadAction<IUser>) => {state.users.push(action.payload);},
        editUser: (state, action: PayloadAction<IUser>) => {state.users = state.users.map((user: IUser) => user.id === action.payload.id ? action.payload : user);},
        removeUser: (state, action: PayloadAction<IUser>) => {state.users.filter((user: IUser) => user.id !== action.payload.id);}
    },
});

export const { setUsers, setUserActive, clearUsers, addUser, editUser, removeUser } = userSlice.actions;
export default userSlice.reducer;