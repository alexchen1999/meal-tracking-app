import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MealComponent } from './components/meal/meal.component';
import { HomeComponent } from './pages/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealStatsComponent } from './components/meal-stats/meal-stats.component';
import { MealTableComponent } from './components/meal-table/meal-table.component';
import { LoginComponent } from './components/login/login.component';
import { TimeGraphComponent } from './components/time-graph/time-graph.component';
import { GraphComponent } from './components/graph/graph.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {path: 'user', component: UserProfileComponent },
  {path: 'meals', component: MealComponent },
  {path: 'create', component: AddMealComponent },
  {path: 'stats', component: MealStatsComponent },
  {path: 'table', component: MealTableComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegistrationComponent},
  {path: 'timegraph', component: TimeGraphComponent },
  {path: 'graph', component: GraphComponent },
  {path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
