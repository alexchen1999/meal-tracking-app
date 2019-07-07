import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseurl = "http://localhost:8000";
        this.httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.baseurl + "/api/users", { headers: this.httpHeaders });
    };
    UserService.prototype.getCurrentUser = function () {
        return this.http.get(this.baseurl + "/user", { headers: this.httpHeaders });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map