import './App.css';
import {Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

function App() {

  const handleClickRegister =(values) => console.log(values);
  const  handleClickLogin =(values) => console.log(values);



  const validationLogin =yup.object().shape({
    email: yup.string().email("Não é um email").required("Esse campo é obrigatório"),
    password: yup.string().min(8,"A senha deve ter 8 caracteres").required("Esse campo é obrigatório"),

  });

  const validationRegister =yup.object().shape({
    email: yup.string().email("Não é um email").required("Esse campo é obrigatório"),
    password: yup.string().min(8,"A senha deve ter 8 caracteres").required("Esse campo é obrigatório"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null],"As senhas não são iguais")
  });

  return (
    <div className="class-container">
      <h1>Login</h1>
      <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin}>
      <Form className="Login-form">
            <div className="login-form-group">

              <Field name="email" className="form-field" placeholder="Email"/>

              <ErrorMessage component="span" name="email" className="form-error"/>
            </div>

            <div className="login-form-group">

              <Field name="password" className="form-field" placeholder="Senha"/>

              <ErrorMessage component="span" name="password" className="form-error"/>
            </div>

            <button className="button" type="submit">Login</button>
      </Form>

      </Formik>

      <h1>Cadastro</h1>

      <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>
      <Form className="Login-form">
            <div className="login-form-group">

              <Field name="email" className="form-field" placeholder="Email"/>

              <ErrorMessage component="span" name="email" className="form-error"/>
            </div>

            <div className="login-form-group">

              <Field name="password" className="form-field" placeholder="Senha"/>

              <ErrorMessage component="span" name="password" className="form-error"/>
            </div>

            <div className="login-form-group">

              <Field name="confirmPassword" className="form-field" placeholder="Confirme sua senha"/>

              <ErrorMessage component="span" name="confirmPassword" className="form-error"/>
            </div>

            <button className="button" type="submit">Login</button>
      </Form>

      </Formik>
    </div>
  );
}

export default App;
