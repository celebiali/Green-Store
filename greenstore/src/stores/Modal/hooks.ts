import { useSelector } from "react-redux";

type RootState = {
  modal: {
    modals: string[];
  };
};

export const useModals = () =>
  useSelector((state: RootState) => state.modal.modals);
