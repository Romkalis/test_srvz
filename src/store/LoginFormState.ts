import {makeAutoObservable} from "mobx";

export interface LoginFormStateType {
  login: string;
  password: string;
  isValid: boolean;
  setLogin: (value: string) => void;
  setPassword: (value: string) => void;
  setIsValid: (value: boolean) => void;
}
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
    if(value.length > 4) {
      this.password = value
    }
  }
}


export default new LoginFormState()
