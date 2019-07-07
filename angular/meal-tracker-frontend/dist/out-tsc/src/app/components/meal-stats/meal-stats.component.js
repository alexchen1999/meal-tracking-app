import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StatsService } from '../../services/stats.service';
var MealStatsComponent = /** @class */ (function () {
    function MealStatsComponent(api) {
        var _this = this;
        this.api = api;
        this.meals = [];
        this.stats = {};
        this.categories = ["Breakfast", "Lunch", "Dinner", "Snack"];
        this.selectedCategory = "";
        this.getMealsByCategory = function () {
            _this.api.getMealsByCategory(_this.selectedCategory).subscribe(function (data) {
                _this.meals = data.meals;
                _this.stats = data.stats;
            }, function (error) {
                alert(JSON.stringify(error.error));
            });
        };
    }
    MealStatsComponent.prototype.ngOnInit = function () {
    };
    MealStatsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-meal-stats',
            templateUrl: './meal-stats.component.html',
            styleUrls: ['./meal-stats.component.css'],
            providers: [StatsService]
        }),
        tslib_1.__metadata("design:paramtypes", [StatsService])
    ], MealStatsComponent);
    return MealStatsComponent;
}());
export { MealStatsComponent };
//# sourceMappingURL=meal-stats.component.js.map