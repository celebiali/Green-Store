import { configureStore} from "@reduxjs/toolkit";
import app from "./App"
import modal from "./Modal";

const store = configureStore({
    reducer : {
        app,
        modal
    }
})

export default store;

/*
* Store dosyası içinde index oluşturduk.
* App klasörü için reducer içindeki app'i tanımladık
*  klasörün içindeki app'te store'u yazmaya başladık.
* Inıtial state içinde değişkenleri, reducer içinde kullanacağımız değişkenleri yazdık
* yazdıklarımızı actions'a exportladık actions klasörü içinde dispatch yaptık
* */