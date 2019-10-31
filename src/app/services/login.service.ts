import { Injectable } from '@angular/core';
import { HttpService } from "../http.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly loginData = 'login'

  constructor(public httpService:HttpService) { }

  login({email,password}) {
    return this.httpService.post(this.loginData,{email,password});
  }
}
