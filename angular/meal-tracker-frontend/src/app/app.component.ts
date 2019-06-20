import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root', // name used to reference component in template/html files
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'meal-tracker-frontend';
  meals = [];
  selectedMeal;

  constructor(private api: ApiService) {
    this.getMeals();
    this.selectedMeal = { name: null, timestamp: null, category: null, price: null, notes: null }
  }

  getMeals = () => {
    this.api.getAllMeals().subscribe(
      data => {
        this.meals = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  showMeal = (meal) => {
    // id is an autogenerated field for django models
    this.api.getMeal(meal.id).subscribe(
      data => {
        this.selectedMeal = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  updateMeal = () => {
    // id is an autogenerated field for django models
    this.api.updateMeal(this.selectedMeal).subscribe(
      data => {
        console.log(data);
        alert("meal updated successfully");
        this.getMeals();
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

  createMeal = () => {
    // id is an autogenerated field for django models
    this.api.createMeal(this.selectedMeal).subscribe(
      data => {
        alert("meal created successfully");
        this.meals.push(data);
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

  deleteMeal = () => {
    // id is an autogenerated field for django models
    this.api.deleteMeal(this.selectedMeal.id).subscribe(
      data => {
        alert("meal deleted successfully");
        this.getMeals();
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }
}
