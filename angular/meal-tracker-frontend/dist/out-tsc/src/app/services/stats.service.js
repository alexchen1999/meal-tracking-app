import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var StatsService = /** @class */ (function () {
    function StatsService(http) {
        this.http = http;
        this.baseurl = "http://localhost:8000";
    }
    StatsService.prototype.getMealsByCategory = function (category) {
        return this.http.get(this.baseurl + "/filterbycategory?category=" + category);
    };
    StatsService.prototype.getMealsByTimeFrame = function (timeframe) {
        return this.http.get(this.baseurl + "/filterbytime?start_date_month=" + timeframe.sdm +
            "&start_date_day=" + timeframe.sdd + "?start_date_year=" + timeframe.sdy +
            "&");
    };
    StatsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], StatsService);
    return StatsService;
}());
export { StatsService };
//# sourceMappingURL=stats.service.js.map