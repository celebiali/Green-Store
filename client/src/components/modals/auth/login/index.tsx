import { createModal, destroyModal } from "../../../../stores/Modals/actions";
import {Formik,Form} from "formik";
import Input from "../../../input";
import {loginSchema} from "../../../validation";
import Button from "../../../button/Button.tsx";

export default function Login() {
  return (
      <div className="login_modal">
          <div className="header">
              <span>Giriş Yap</span>
              <span onClick={destroyModal}>X</span>
          </div>
          <hr/>
          <div className="container">
      <Formik
      validationSchema={loginSchema}
      initialValues={{
        username:'',
        password:''
      }}
      onSubmit={(values,actions) =>{
    console.log("gönderilen değer",values)
      } }
      >
        <Form>
          <Input label="Kullanıcı Adı" name="username" className="username_input"/>
          <Input label="Parola" name="password" className="password_input"/>
          <Button title="Giriş Yap" type="submit"></Button>
        </Form>
      </Formik>
              <hr />
              <div className="isUser">
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
