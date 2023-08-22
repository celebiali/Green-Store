import {useSelector} from "react-redux";
export const useNavbarType = () => useSelector((state: any) => state.app.navbarType)
export const useLanguage = (state:any) => useSelector(state.app.language)