import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MealComponent } from '../meal/meal.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  user:User;

  users = [];


  constructor(private userService : UserService) { 
    this.getUsers();
  }

  getUsers = () => {
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {

  }

}
