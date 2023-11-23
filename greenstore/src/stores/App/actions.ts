import store from "..";
import {_setLanguage,_setNavbarType} from ".";
export const setNavbarType = (type: string) => store.dispatch(_setNavbarType(type))
export const setLanguage = (language: string) => store.dispatch(_setLanguage(language))
