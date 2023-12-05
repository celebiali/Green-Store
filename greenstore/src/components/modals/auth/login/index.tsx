import { createModal, destroyModal } from "../../../../stores/Modals/actions";
import {Formik,Form} from "formik";
import Input from "../../../input";
import {loginSchema} from "../../../validation";

export default function Login() {
  return (
      <>
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
          <Input label="Kullanıcı Adı" name="username"/>
          <Input label="Parola" name="password"/>
          <button title="Giriş Yap" type="submit"></button>
        </Form>
      </Formik>

      </>


  );
}
