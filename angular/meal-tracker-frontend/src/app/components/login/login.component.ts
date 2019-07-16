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

  authenticate = (username, password) => {
    this.loginService.authenticate(username, password).subscribe(
      data => {
        this.user = data;
        window.location.href = window.location.origin
      },
      error => {
        alert("The username or password is incorrect. Try again.");
        console.error(JSON.stringify(error.error));
      }
    )
  }

  testMethod = (username, password) => {
    this.authenticate(username, password);
    console.log(this.user)
  }

}
