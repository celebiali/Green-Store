import { destroyModal } from "../../../../stores/Modals/actions";

export default function Register() {
  return (
    <div>
      Register
      <button onClick={destroyModal}>Kapat</button>
    </div>
  );
}
