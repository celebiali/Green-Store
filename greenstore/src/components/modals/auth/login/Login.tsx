import { createModal, destroyModal } from "../../../../stores/Modals/actions";

export default function Login() {
  return (
    <div style={{ width: 500 }}>
      Login <br />
      <button
        onClick={() => {
          destroyModal();
          createModal("register");
        }}
      >
        Register Modalı Yükle
      </button>
      <button onClick={destroyModal}>Kapat</button>
    </div>
  );
}
