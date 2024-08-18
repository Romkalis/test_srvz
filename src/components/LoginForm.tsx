import {observer} from "mobx-react-lite";
import LoginFormState from "../store/LoginFormState.tsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from './LoginForm.module.css'

export const LoginForm = observer(
  () => {

    const {isValid,
      login,
      password,
      setIsValid,
      setLogin,
      setPassword,
    } = LoginFormState;

    let initialValues = {
      login: login,
      password: password
    }

    const onSubmitHandler = (values) => {
      console.log(`Submit!, login: ${values.login}, password : ${values.password}`)
      setLogin(values.login)
      setPassword(values.password)
      setIsValid(true)
    }

    return (
      <>

        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
          <Form className={s.form}>
            <h2 className={s.form__heading}>Login Form</h2>

            <div className={s.form__field}>
              <label className={s.form__fieldLabel} htmlFor="login">Enter e-mail</label>
              <Field type={'email'}
                     name={'login'}
                     className={s.form__fieldInput}
                     placeholder={'Enter e-mail'}
                     required
              />
              <ErrorMessage name={'login'} component={'div'} />
            </div>

            <div className={s.form__field}>
              <label className={s.form__fieldLabel} htmlFor="password">Enter password</label>
              <Field type={'password'}
                     name={'password'}
                     className={s.form__fieldInput}
                     placeholder={'Enter password'}
                     required
              />
              <ErrorMessage name={'password'} component={'div'} />
            </div>

            <button className={s.form__button} type={'submit'}> Send </button>

          </Form>

        </Formik>
      </>
    )
})
