import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {LoginForm} from "./components/LoginForm.tsx";
import {observer} from "mobx-react-lite";
import s from './App.module.css'
import LoginFormState, {LoginFormStateType} from "./store/LoginFormState.ts";
import {Greet} from "./components/Greet.tsx";
import {useEffect} from "react";

export const App = observer(
    () => {
      const {isValid}: LoginFormStateType = LoginFormState;

      const navigate = useNavigate();

      useEffect(() => {
        if (isValid) {
          navigate('/main');
        } else {
          navigate('/auth');
        }
      }, [isValid]);

    return (
      <div className={s.app}>
        <Routes>
            <Route path={'/auth'} element={<LoginForm />} />
            <Route path={'/main'} element={<Greet />} />
        </Routes>
      </div>
    )
  }
)

