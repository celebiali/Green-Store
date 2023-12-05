import { createModal, destroyModal } from "../../../../stores/Modals/actions";

export default function Register() {
  return (
    <div className="register_modal">
      <div className="header">
        <span>Kayıt Ol</span>
        <span onClick={destroyModal}>X</span>
      </div>
      <hr />
      <div className="container">
        <div>
          <label>Kullanıcı Adı</label>
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
          <label>E-Posta Adresi </label>
        </div>
        <div style={{ marginTop: 5 }}>
          <input
            type="text"
            placeholder="Enter E-Mail"
            required
            className="email_input"
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
            Kayıt Ol
          </button>
        </div>
        <hr />
        <div className="isUser">
          <span>Hesabın var mı?</span>
          <a
            href="#"
            style={{ marginLeft: 5, color: "black" }}
            onClick={() => {
              destroyModal();
              createModal("login");
            }}
          >
            Giriş Yap
          </a>
        </div>
      </div>
    </div>
  );
}
