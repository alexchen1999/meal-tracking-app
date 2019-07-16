import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-meal-table',
  templateUrl: './meal-table.component.html',
  styleUrls: ['./meal-table.component.css'],
  providers: [ApiService, UserService]
})
export class MealTableComponent {

  title = 'meal-tracker-frontend';
  meals = [];
  selectedMeal;
  categories = ["Breakfast", "Lunch", "Dinner", "Snack"];

  // table stuff
  displayedColumns: string[] = ['timestamp', 'name', 'price'];
  dataSource;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private api: ApiService, private userService: UserService) {
    // this.getMeals();
    this.getUserMeals();
    this.selectedMeal = { name: null, timestamp: null, category: null, price: null, notes: null }
  }

  getMeals = () => {
    this.api.getAllMeals().subscribe(
      data => {
        this.meals = data;
        this.dataSource = new MatTableDataSource(this.meals);
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    )
  }

  getUserMeals = () => {
    this.userService.getCurrentUser().subscribe(
      data => {
        this.meals = data.meals;
        this.dataSource = new MatTableDataSource(this.meals);
        this.dataSource.sort = this.sort;
      },
      error => {
        console.log(error);
      }
    )
  }
}
