import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000/api";
  csrftoken = this.getCookie('csrftoken');
  httpHeaders = new HttpHeaders({'Content-type': 'application/json', "X-CSRFToken": this.csrftoken});

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

  // required for non-GET requests for authenticated users
  getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
}
