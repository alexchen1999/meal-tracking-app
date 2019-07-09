import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  username: "";
  password: "";
  user;

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  logNames = () => {
    console.log(this.username);
    console.log(this.password);
  }

  authenticate = (username, password) => {
    console.log(username)
    console.log(password)
    this.loginService.authenticate(username, password).subscribe(
      data => {
        this.user = data;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

  testMethod = (username, password) => {
    this.authenticate(username, password);
    console.log(this.user)
  }

}
