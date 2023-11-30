import { createModal, destroyModal } from "../../../../stores/Modals/actions";


export default function Login() {
return (
<div
style={{
width: 500,
border: "0.1px solid black",
boxShadow: "0px 0px 0.1px rgba(0, 0, 0, 0.3)",
position: "fixed",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
backgroundColor: "white",
zIndex: 1,
}}
>
<div
style={{
display: "flex",
alignItems: "center",
justifyContent: "space-between",
paddingLeft: 20,
paddingRight: 20,
paddingTop: 20,
paddingBottom: 10,
cursor: "pointer",
}}
>
<span>Hesap oluştur</span>
<span onClick={destroyModal}>X</span>
</div>
<hr />
<div style={{ width: "92%", marginLeft: "auto", marginRight: "auto" }}>
<div>
<label>Kullanıcı adın</label>
</div>
<div style={{ backgroundColor: "red" }}>
<input
type="text"
placeholder="Enter Username"
required
style={{
width: "100%",
height: 40,
marginLeft: "auto",
marginRight: "auto",
backgroundColor: "#F4F7F4",
border: "none",
box
} - shadow} />: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }}
          />
</div>
<div>
<label>E-Posta adresi</label>
</div>
<div>
<input
type="text"
placeholder="Password"
name="uname"
required
style={{
width: "100%",
height: 40,
marginLeft: "auto",
marginRight: "auto",
backgroundColor: "#F4F7F4",
border: "none",
}} />
</div>
<div>
<label>Şifre</label>
</div>
<div style={{ backgroundColor: "red" }}>
<input
type="password"
placeholder="Şifre"
name="uname"
required
style={{
width: "100%",
height: 40,
marginLeft: "auto",
marginRight: "auto",
backgroundColor: "#F4F7F4",
border: "none",
}} />
</div>
<div>
<button type="submit" style={{ marginLeft: 0 }}>
Kayıt Ol
</button>
</div>
<hr />
<div style={{ width: "92%", marginLeft: "auto", marginRight: "auto" }}>
<span>Hesabın var mı?</span>
<a
href="#"
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
