import { useSelector } from "react-redux";

export const useModals = () => useSelector((state: any) => state.modal.modals);
