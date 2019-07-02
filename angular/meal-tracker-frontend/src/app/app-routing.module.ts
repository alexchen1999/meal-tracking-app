import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealStatsComponent } from './components/meal-stats/meal-stats.component';
import { MealTableComponent } from './components/meal-table/meal-table.component';

const routes: Routes = [
  {path: 'user', component: UserProfileComponent },
  {path: 'meals', component: MealComponent },
  {path: 'create', component: AddMealComponent },
  {path: 'stats', component: MealStatsComponent },
  {path: 'table', component: MealTableComponent },
  {path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
