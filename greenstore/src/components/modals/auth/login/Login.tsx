import { createModal, destroyModal } from "../../../../stores/Modals/actions";

export default function Login() {
  return (
    <div
     className="login_modal"
    >
      <div
      className="header"
      >
        <span>Giriş yap</span>
        <span onClick={destroyModal}>X</span>
      </div>
      <hr />
      <div
     className="container"
      >
        <div>
          <label>User name</label>
        </div>
        <div style={{ marginTop: 5 }}>
          <input
            type="text"
            placeholder="Enter Username"
            required
          className="username_input"
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <label>Password</label>
        </div>
        <div style={{ marginTop: 5 }}>
          <input
            type="text"
            placeholder="Password"
            name="uname"
            required
           className="password_input"
          />
        </div>
        <div style={{ marginTop: 10, marginBottom: 20 }}>
          <button type="submit" style={{ marginLeft: 0 }}>
            Giriş Yap
          </button>
        </div>
        <hr />
        <div
        className="isUser"
        >
          <span>Hesabın yok mu?</span>
          <a
            href="#"
            style={{ marginLeft: 5, color: "black" }}
            onClick={() => {
              destroyModal();
              createModal("register");
            }}
          >
            Kayıt Ol
          </a>
        </div>
      </div>
    </div>
  );
}
