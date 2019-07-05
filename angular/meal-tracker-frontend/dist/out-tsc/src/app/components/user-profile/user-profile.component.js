import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserService } from './user.service';
var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.users = [];
        this.getUsers = function () {
            _this.userService.getAllUsers().subscribe(function (data) {
                _this.users = data;
            }, function (error) {
                console.log(error);
            });
        };
        this.getCurrentUser = function () {
            _this.userService.getCurrentUser().subscribe(function (data) {
                _this.currentUser = data.user;
            }, function (error) {
                console.log(error);
            });
        };
        this.getUsers();
        this.getCurrentUser();
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.component.html',
            styleUrls: ['./user-profile.component.css'],
            providers: [UserService]
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map