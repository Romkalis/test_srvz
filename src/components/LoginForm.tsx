
import {observer} from "mobx-react-lite";
import LoginFormState, {LoginFormStateType} from "../store/LoginFormState.ts";
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from './LoginForm.module.css'
import {useState} from "react";
import * as Yup from 'yup';


export interface initialValuesType {
  login: string;
  password: string;
}

export const LoginForm = observer(
  () => {

    const loginValidationSchema = Yup.object({
      login: Yup.string()
        .email('Неправильный формат почты')
        .required('Это поле обязательное')
      ,
      password: Yup.string()
        .required('Это поле обязательное')
        .min(5, 'Пароль должен быть больше 4х символов')
    })

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
        <Formik initialValues={initialValues}
                onSubmit={onSubmitHandler}
                validationSchema={loginValidationSchema}
        >
          <Form className={s.form}>
            <h2 className={s.form__heading}>Login Form</h2>

              <label htmlFor="login">
                <ErrorMessage name={'login'} component={'span'}  className={s.form__error}/>
                <Field type={'email'}
                     name={'login'}
                     className={s.form__fieldInput}
                     placeholder={'Enter e-mail'}
                     disabled={isSending}
              />
              </label>


              <label htmlFor="password">
                <ErrorMessage name={'password'} component={'span'} className={s.form__error}/>
                <Field type={'password'}
                     name={'password'}
                     className={s.form__fieldInput}
                     placeholder={'Enter password'}
                     disabled={isSending}
              />

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
