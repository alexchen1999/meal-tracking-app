import { Component } from '@angular/core';
import { StatsService } from '../../services/stats.service';

@Component({
  selector: 'app-meal-stats',
  templateUrl: './meal-stats.component.html',
  styleUrls: ['./meal-stats.component.css'],
  providers: [StatsService]
})
export class MealStatsComponent {

  meals = [];
  categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
  selectedCategory = "";

  constructor(private api: StatsService) { 
    
  }

  ngOnInit() {
  }

  getMealsByCategory = () => {
    this.api.getMealsByCategory(this.selectedCategory).subscribe(
      data => {
        this.meals = data.meals;
        alert(JSON.stringify(data));
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

}
