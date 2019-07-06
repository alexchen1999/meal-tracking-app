import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialsModule } from './angularMaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MealComponent } from './components/meal/meal.component';
import { HomeComponent } from './pages/home/home.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { MealTableComponent } from './components/meal-table/meal-table.component';
import { MealStatsComponent } from './components/meal-stats/meal-stats.component';
import { LoginComponent } from './components/login/login.component';

// import all modules used by the component here
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MealComponent,
    HomeComponent,
    AddMealComponent,
    MealTableComponent,
    MealStatsComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
