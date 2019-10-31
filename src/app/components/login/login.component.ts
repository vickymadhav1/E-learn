import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from "../../http.service";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private httpClient:HttpClient) { }

  ngOnInit() {
  }
  login(email:string, password:string) {
    return this.httpClient.post<{access_token:  string}>
    ('http://www.your-server.com/auth/login', {email, password}).pipe(tap(res => {
    localStorage.setItem('access_token', res.access_token);
}))
}
}
