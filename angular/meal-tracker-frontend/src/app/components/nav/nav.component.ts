import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  providers: [UserService]
})
export class NavComponent implements OnInit {

  appTitle: string = "Meal Tracking App";
  currentUser;
  loggedIn: boolean;

  constructor(private userService: UserService) {
    this.getCurrentUser();
  }

  ngOnInit() {
  }

  getCurrentUser = () => {
    this.userService.getCurrentUser().subscribe(
      data => {
        this.currentUser = data.user;
        if (this.currentUser == null) {
          this.loggedIn = false;
        } else {
          this.loggedIn = true;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
