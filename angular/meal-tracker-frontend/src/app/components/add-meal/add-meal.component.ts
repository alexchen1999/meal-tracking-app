import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css'],
  providers: [ApiService]
})
export class AddMealComponent implements OnInit {

  meal;
  categories = ["Breakfast", "Lunch", "Dinner", "Snack"];

  constructor(private api: ApiService) {
    this.meal = { name: null, timestamp: null, category: null, price: null, notes: null };
  }

  ngOnInit() {
  }

  createMeal = () => {
    this.api.createMeal(this.meal).subscribe(
      data => {
        alert("meal created successfully");
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

}
