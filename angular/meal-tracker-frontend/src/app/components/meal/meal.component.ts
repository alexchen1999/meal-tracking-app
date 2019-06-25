import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/Meal';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() meal: Meal;

  constructor() { 
    this.meal = {
      name: 'Madras',
      timestamp: "",
      category: "Dinner",
      price: 9.99,
      notes: ""
    }
  }

  ngOnInit() {
  }

}
