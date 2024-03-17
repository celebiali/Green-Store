import { modalData } from "../../../components/modals/auth/modal";
import { useModals } from "../../../stores/Modal/hooks";

export default function Modals() {
  const modals = useModals();
  return (
    <div className="modal">
      {modals.map((modal) => {
        const m = modalData.find((m: any) => m.name === modal.name);
        return (
          <div className="modal_components">
            <m.element />
          </div>
        );
      })}
    </div>
  );
}
