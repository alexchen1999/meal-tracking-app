import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'meal-tracker-frontend';
  meals = [];

  constructor(private api : ApiService) {
    this.getMeals();
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
}
