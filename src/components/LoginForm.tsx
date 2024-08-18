
import {observer} from "mobx-react-lite";
import LoginFormState, {LoginFormStateType} from "../store/LoginFormState.ts";
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from './LoginForm.module.css'
import {useState} from "react";


export interface initialValuesType {
  login: string;
  password: string;
}



export const LoginForm = observer(
  () => {

    const [isSending, setIsSending] = useState(false)

    const {
      login,
      password,
      setLogin,
      setPassword,
      setIsValid
    }: LoginFormStateType = LoginFormState;

    let initialValues:initialValuesType = {
      login: login,
      password: password,
    }

    const onSend = (values: initialValuesType) => {
      setIsSending(true)

      setTimeout(() => {
          console.log(`Send data to server: login: ${values.login}, password: ${values.password}`);

          setLogin(values.login)
          setPassword(values.password)
          setIsValid(true)
          setIsSending(false)

      }, 1000);
    };
    const onSubmitHandler = (values, {resetForm}) => {
      onSend(values)
      resetForm();
    }

    return (
      <>
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
          <Form className={s.form}>
            <h2 className={s.form__heading}>Login Form</h2>

              <label htmlFor="login">
              <Field type={'email'}
                     name={'login'}
                     className={s.form__fieldInput}
                     placeholder={'Enter e-mail'}
                     required
                     disabled={isSending}
              />
              <ErrorMessage name={'login'} component={'div'} />
              </label>


              <label htmlFor="password">
              <Field type={'password'}
                     name={'password'}
                     className={s.form__fieldInput}
                     placeholder={'Enter password'}
                     required
                     disabled={isSending}
              />
              <ErrorMessage name={'password'} component={'div'} />

              </label>

            <button className={s.form__button}
                    type={'submit'}
                    disabled={isSending}>
              Send
            </button>

          </Form>

        </Formik>
      </>
    )
})
