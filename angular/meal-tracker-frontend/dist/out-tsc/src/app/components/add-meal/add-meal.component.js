import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
var AddMealComponent = /** @class */ (function () {
    function AddMealComponent(api) {
        var _this = this;
        this.api = api;
        this.categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
        this.createMeal = function () {
            _this.api.createMeal(_this.meal).subscribe(function (data) {
                alert("meal created successfully");
            }, function (error) {
                alert(JSON.stringify(error.error));
            });
        };
        this.meal = { name: null, timestamp: null, category: null, price: null, notes: null };
    }
    AddMealComponent.prototype.ngOnInit = function () {
    };
    AddMealComponent = tslib_1.__decorate([
        Component({
            selector: 'app-add-meal',
            templateUrl: './add-meal.component.html',
            styleUrls: ['./add-meal.component.css'],
            providers: [ApiService]
        }),
        tslib_1.__metadata("design:paramtypes", [ApiService])
    ], AddMealComponent);
    return AddMealComponent;
}());
export { AddMealComponent };
//# sourceMappingURL=add-meal.component.js.map