import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    navbarType: 'app',
    language: 'tr',
}
const app = createSlice({
    name: 'app',
    initialState,
    reducers: {
        _setNavbarType: (state,action) => {
            state.navbarType = action.payload
        },
        _setLanguage: (state,action) => {
            state.language = action.payload
        },
    }
})
export const {_setLanguage,_setNavbarType} = app.actions
export default app.reducer