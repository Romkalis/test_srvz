import {makeAutoObservable} from "mobx";

class LoginFormState {

  isValid: boolean = false
  login: string = ''
  password: string = ''

  constructor () {
    makeAutoObservable(this)
  }

  setIsValid = (value: boolean) => {
    this.isValid = value;
  }

  setLogin = (value: string) => {
    this.login = value;
  }

  setPassword = (value: string) => {
    this.password = value
  }
}


export default new LoginFormState()
