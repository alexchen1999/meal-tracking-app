import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css'],
  providers: [ApiService, UserService]
})
export class AddMealComponent implements OnInit {

  meal;
  categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
  currentUser;

  constructor(private api: ApiService, private userService: UserService) {
    this.meal = { name: null, timestamp: null, category: null, price: null, notes: null };
    this.getCurrentUser();
  }

  ngOnInit() {
  }

  createMeal = () => {
    this.meal['username'] = this.currentUser;
    console.log(this.meal);
    this.api.createMeal(this.meal).subscribe(
      data => {
        alert("meal created successfully");
      },
      error => {
        alert(JSON.stringify(error.error));
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

}
