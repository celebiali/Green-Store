import store from "..";
import {_setLanguage,_setNavbarType} from ".";
export const setNavbarType = (type:any) => store.dispatch(_setNavbarType(type))
export const setLanguage = (language:any) => store.dispatch(_setLanguage(language))
