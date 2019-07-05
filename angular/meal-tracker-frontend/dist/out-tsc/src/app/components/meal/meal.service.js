import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var MealService = /** @class */ (function () {
    function MealService(http) {
        this.http = http;
        this.baseurl = "http://localhost:8000/api";
        this.httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
    }
    MealService.prototype.getAllUsersMeals = function () {
        return this.http.get(this.baseurl + "/usersmeals", { headers: this.httpHeaders });
    };
    MealService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MealService);
    return MealService;
}());
export { MealService };
//# sourceMappingURL=meal.service.js.map