import { createModal, destroyModal } from "../../../../stores/Modals/actions";
import {Formik,Form} from "formik";
import Input from "../../../input";
import Button from "../../../button/Button.tsx";
import {registerSchema} from "../../../validation";
export default function Register() {
  return (
    <div className="register_modal">
      <div className="header">
        <span>Kayıt Ol</span>
        <span onClick={destroyModal}>X</span>
      </div>
      <hr />
      <div className="container">
        <Formik
            validationSchema={registerSchema}
            initialValues={{
              username:'',
              email:'',
              password:''
            }}
        >
           <Form><Input label="Kullanıcı Adı" name="username" className="username_input"/>
          <Input label="Email" name="email" className="email_input"/>
          <Input label="Parola" name="password" className="password_input"/>
         <Button title="Kayıt Ol" type="submit"></Button>
          </Form>
        </Formik>
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
