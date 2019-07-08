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
  startDate = new Date();
  endDate = new Date();
  selectedTimeFrame = {startDate: this.startDate, endDate: this.endDate};

  constructor(private api: StatsService) { 
    this.api.getMealsByCategory().subscribe(
      data => {
        this.meals = data.meals;
        this.stats = data.stats;
      },
      error => {
        alert(JSON.stringify(error.error));
      }
    )
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

  getMealsByTimeFrame = (startDate, endDate) => {
    var timeFrame = {startDate, endDate};
    console.log(timeFrame.startDate)
    console.log(timeFrame.startDate.getDate())
    this.api.getMealsByTimeFrame(timeFrame).subscribe(
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
