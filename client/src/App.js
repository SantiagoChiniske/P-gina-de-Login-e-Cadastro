import '../src/App.css'
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as yup from "yup";

function App() {

  const handleClickRegister = (values) => console.log=(values);
  const handleClickLLogin = (values) => console.log=(values);

  const validationlogin = yup.object().shape({
    email: yup.string().email("Nao e um email").required("Esse campo e obrigatorio"),
    password: yup.string().min(8,"A senmha deve ter 8 caracteres").required("Esse campo e obrigatorio"),
  });
  const validationRegister = yup.object().shape({
    email: yup.string().email("Nao e um email").required("Esse campo e obrigatorio"),
    password: yup.string().min(8,"A senmha deve ter 8 caracteres").required("Esse campo e obrigatorio"),
    confirmpassword: yup.string().oneOf([yup.ref("password"),null], "As senhas nao sao iguais"),
  });

  return (
    <div className="class-container">
      <h1>Login</h1>

      <Formik initialValue={{}}  onSubmit={ handleClickLLogin} validationSchema={validationlogin}> 
      <Form className="Login-form">
          <div className='login-form-group'>
          <Field name="email" className="form-field" placeHolder="Email"/>
            <ErrorMessage component="span" name="email" className="form-error"/>
          </div>

          <div className='login-form-group'>
          <Field name="password" className="form-field" placeHolder="Senha"/>
            <ErrorMessage component="span" name="password" className="form-error"/>
          </div>

          <button className="button" type="submit">Login</button>


      </Form>
      </Formik>


      <h1>Cadastro</h1>

      <Formik
       initialValue={{}}  
       onSubmit={ handleClickRegister} 
       validationSchema={validationRegister}> 

      <Form className="Login-form">
          <div className='login-form-group'>
          <Field name="email" className="form-field" placeHolder="Email"/>
            <ErrorMessage component="span" name="email" className="form-error"/>
          </div>

          <div className='login-form-group'>
          <Field name="password" className="form-field" placeHolder="Senha"/>
            <ErrorMessage component="span" name="password" className="form-error"/>
          </div>
          <div className='login-form-group'>
          <Field name="confirmpassword" className="form-field" placeHolder="Confirme sua Senha"/>
            <ErrorMessage component="span" name="confirmpassword" className="form-error"/>
          </div>

          <button className="button" type="submit">Login</button>


      </Form>
      </Formik>
    </div>
  );
}

export default App;
