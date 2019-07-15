import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { MealComponent } from '../meal/meal.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserService]
})
export class UserProfileComponent implements OnInit {
  user:User;

  users = [];
  currentUser;


  constructor(private userService : UserService) { 
    this.getUsers();
    this.getCurrentUser();
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

  getCurrentUser = () => {
    this.userService.getCurrentUser().subscribe(
      data => {
        this.currentUser = data.user;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {

  }

}
