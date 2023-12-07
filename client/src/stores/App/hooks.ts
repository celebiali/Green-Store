export const useNavbarType = () => useSelector((state: RootState) => state.app.navbarType);
import { useSelector } from "react-redux";
import { RootState } from "../index";

export const useLanguage = () => useSelector((state: RootState) => state.app.language);
