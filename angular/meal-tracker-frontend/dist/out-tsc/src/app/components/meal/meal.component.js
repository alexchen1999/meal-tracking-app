import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MealService } from '../meal/meal.service';
var MealComponent = /** @class */ (function () {
    function MealComponent(mealService) {
        var _this = this;
        this.mealService = mealService;
        this.meals = [];
        this.getUsersMeals = function () {
            _this.mealService.getAllUsersMeals().subscribe(function (data) {
                _this.meals = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.getUsersMeals();
    }
    MealComponent.prototype.ngOnInit = function () {
    };
    MealComponent = tslib_1.__decorate([
        Component({
            selector: 'app-meal',
            templateUrl: './meal.component.html',
            styleUrls: ['./meal.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MealService])
    ], MealComponent);
    return MealComponent;
}());
export { MealComponent };
//# sourceMappingURL=meal.component.js.map