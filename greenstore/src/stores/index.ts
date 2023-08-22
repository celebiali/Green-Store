import { configureStore} from "@reduxjs/toolkit";
import app from "./App"

const store = configureStore({
    reducer : {
        app
    }
})

export default store;