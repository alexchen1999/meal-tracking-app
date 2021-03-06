import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
var MealTableComponent = /** @class */ (function () {
    function MealTableComponent(api) {
        var _this = this;
        this.api = api;
        this.title = 'meal-tracker-frontend';
        this.meals = [];
        this.categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
        // table stuff
        this.displayedColumns = ['timestamp', 'name', 'price'];
        this.getMeals = function () {
            _this.api.getAllMeals().subscribe(function (data) {
                _this.meals = data;
                _this.dataSource = new MatTableDataSource(_this.meals);
                _this.dataSource.sort = _this.sort;
            }, function (error) {
                console.log(error);
            });
        };
        this.getMeals();
        this.selectedMeal = { name: null, timestamp: null, category: null, price: null, notes: null };
    }
    MealTableComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib_1.__decorate([
        ViewChild(MatSort, { static: true }),
        tslib_1.__metadata("design:type", MatSort)
    ], MealTableComponent.prototype, "sort", void 0);
    MealTableComponent = tslib_1.__decorate([
        Component({
            selector: 'app-meal-table',
            templateUrl: './meal-table.component.html',
            styleUrls: ['./meal-table.component.css'],
            providers: [ApiService]
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], MealTableComponent);
    return MealTableComponent;
}());
export { MealTableComponent };
//# sourceMappingURL=meal-table.component.js.map