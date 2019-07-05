import { Component } from '@angular/core';
import { StatsService } from '../../services/stats.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-meal-stats',
  templateUrl: './meal-stats.component.html',
  styleUrls: ['./meal-stats.component.css'],
  providers: [StatsService]
})
export class MealStatsComponent {

  meals = [];
  stats = {};
  categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
  selectedCategory = "";
  startDate = new Date('June 10, 2019 00:00:00');
  endDate = new Date('September 4, 2019 23:24:00');
  selectedTimeFrame = {startDate: this.startDate, endDate: this.endDate};

  constructor(private api: StatsService) { 
    
  }

  ngOnInit() {
  }

  addStartDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value;
    console.log(this.startDate)
  }

  addEndDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.endDate = event.value;
    console.log(this.endDate);
  }

  getMealsByCategory = () => {
    this.api.getMealsByCategory(this.selectedCategory).subscribe(
      data => {
        this.meals = data.meals;
        this.stats = data.stats;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }

  getMealsByTimeFrame = () => {
    console.log(this.selectedTimeFrame.startDate)
    console.log(this.selectedTimeFrame.startDate.getDate())
    this.api.getMealsByTimeFrame(this.selectedTimeFrame).subscribe(
      data => {
        this.meals = data.meals;
        this.stats = data.stats;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
  }


}
