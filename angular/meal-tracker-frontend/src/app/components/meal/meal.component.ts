import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';
import {MealService} from '../meal/meal.service'

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  meals = [];


  constructor(private mealService : MealService) { 
    this.getUsersMeals();
  }

  getUsersMeals = () => {
    this.mealService.getAllUsersMeals().subscribe(
      data => {
        this.meals = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit() {

  }

}
