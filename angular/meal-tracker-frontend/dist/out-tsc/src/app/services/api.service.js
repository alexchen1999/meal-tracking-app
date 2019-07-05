import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseurl = "http://localhost:8000/api";
        this.httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
    }
    ApiService.prototype.getAllMeals = function () {
        return this.http.get(this.baseurl + "/meals", { headers: this.httpHeaders });
    };
    ApiService.prototype.getMeal = function (id) {
        return this.http.get(this.baseurl + "/meals/" + id + "/", { headers: this.httpHeaders });
    };
    ApiService.prototype.updateMeal = function (meal) {
        return this.http.put(this.baseurl + "/meals/" + meal.id + "/", meal, { headers: this.httpHeaders });
    };
    ApiService.prototype.createMeal = function (meal) {
        return this.http.post(this.baseurl + "/meals/", meal, { headers: this.httpHeaders });
    };
    ApiService.prototype.deleteMeal = function (id) {
        return this.http.delete(this.baseurl + "/meals/" + id + "/", { headers: this.httpHeaders });
    };
    ApiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ApiService);
    return ApiService;
}());
export { ApiService };
//# sourceMappingURL=api.service.js.map