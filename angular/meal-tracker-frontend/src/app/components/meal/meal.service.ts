import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  baseurl = "http://localhost:8000/api";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http : HttpClient) { }

  getAllUsersMeals(): Observable<any> {
    return this.http.get(this.baseurl + "/usersmeals", 
      {headers: this.httpHeaders});
  }

  // getMeal(id): Observable<any> {
  //   return this.http.get(this.baseurl + "/users/" + id + "/", 
  //     {headers: this.httpHeaders});
  // }

  // updateMeal(meal): Observable<any> {
  //   return this.http.put(this.baseurl + "/users/" + meal.id + "/", meal,
  //     {headers: this.httpHeaders});
  // }

  // createMeal(meal): Observable<any> {
  //   return this.http.post(this.baseurl + "/users/", meal,
  //     {headers: this.httpHeaders});
  // }

  // deleteMeal(id): Observable<any> {
  //   return this.http.delete(this.baseurl + "/users/" + id + "/", 
  //     {headers: this.httpHeaders});
  // }
}
