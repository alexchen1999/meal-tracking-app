import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  username;
  name;
  password;

  constructor(private registrationService : RegistrationService) { }

  ngOnInit() {
  }

  register = (username, name, password) => {
    this.registrationService.register(username, name, password)
      .subscribe(data =>
        console.log(data.username + ' ' + data.password + ' ' + data.name)
      )
  }


}
