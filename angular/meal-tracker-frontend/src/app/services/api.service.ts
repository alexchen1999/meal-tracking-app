import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000/api";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http : HttpClient) { }

  getAllMeals(): Observable<any> {
    return this.http.get(this.baseurl + "/meals", 
      {headers: this.httpHeaders});
  }

  getMeal(id): Observable<any> {
    return this.http.get(this.baseurl + "/meals/" + id + "/", 
      {headers: this.httpHeaders});
  }

  updateMeal(meal): Observable<any> {
    return this.http.put(this.baseurl + "/meals/" + meal.id + "/", meal,
      {headers: this.httpHeaders});
  }

  createMeal(meal): Observable<any> {
    return this.http.post(this.baseurl + "/meals/", meal,
      {headers: this.httpHeaders});
  }

  deleteMeal(id): Observable<any> {
    return this.http.delete(this.baseurl + "/meals/" + id + "/", 
      {headers: this.httpHeaders});
  }
}
