import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  baseurl = "http://localhost:8000"

  constructor(private http : HttpClient) { }

  getMealsByCategory(category):Observable<any> {
    return this.http.get(this.baseurl + "/filterbycategory?category=" + category);
  }
}
