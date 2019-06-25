import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MealComponent } from '../meal/meal.component'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;

  constructor() { 
    this.user = {
      username: 'test',
      name: 'test',
      password: '123',
      meals: []
    }
  }

  ngOnInit() {

  }

}
