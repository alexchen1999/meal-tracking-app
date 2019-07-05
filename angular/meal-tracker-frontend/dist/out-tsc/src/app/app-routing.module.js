import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MealComponent } from './components/meal/meal.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealStatsComponent } from './components/meal-stats/meal-stats.component';
import { MealTableComponent } from './components/meal-table/meal-table.component';
var routes = [
    { path: 'user', component: UserProfileComponent },
    { path: 'meals', component: MealComponent },
    { path: 'create', component: AddMealComponent },
    { path: 'stats', component: MealStatsComponent },
    { path: 'table', component: MealTableComponent },
    { path: '', component: HomeComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map