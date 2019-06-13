import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://localhost:8000/home/api";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http : HttpClient) { }

  getAllMeals(): Observable<any> {
    return this.http.get(this.baseurl + "/meals", 
      {headers: this.httpHeaders});
  }
}
