import {LoginForm} from "./components/LoginForm.tsx";
import {observer} from "mobx-react-lite";
import s from './App.module.css'
import LoginFormState, {LoginFormStateType} from "./store/LoginFormState.ts";

export const App = observer(
    () => {

      const {
        login,
        isValid,
        password,
        setLogin,
        setIsValid,
        setPassword
      }: LoginFormStateType = LoginFormState;

      console.log('hi',login)

      const onClearStateHandler = () => {
        setLogin('')
        setPassword('')
        setIsValid(false)
      }

    return (
      <div className={s.app}>

        {!login && <LoginForm />}
        {isValid && (

          <div className={s.app__section}>
            <h1 className={s.app__heading}>Привет, {login}!</h1>
            <p className="app__text">твой пароль: {password}, только никому не говори. </p>


            <img className={s.app__image}
                 src="https://sun9-51.userapi.com/impf/c853524/v853524030/da491/ny0OafIroYE.jpg?size=548x395&quality=96&sign=6c48942abce9c3a75aa200cb92df06bc&type=album"
                 alt="Ежик и медвежонок"
            />

            <button className={s.app__button} onClick={onClearStateHandler}>
              Выйти
            </button>

          </div>

        )}

      </div>
    )
  }
)

