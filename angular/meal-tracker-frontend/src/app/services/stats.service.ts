import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  baseurl = "http://localhost:8000"

  constructor(private http : HttpClient) { }

  getMealsByCategory():Observable<any> {
    return this.http.get(this.baseurl + "/filterbycategory");
  }

  getMealsByTimeFrame(timeframe):Observable<any> {
    return this.http.get(this.baseurl + "/filterbytime?start_date_month=" + (timeframe.startDate.getMonth() + 1) + 
    "&start_date_day=" + timeframe.startDate.getDate() + "&start_date_year=" + timeframe.startDate.getFullYear() + 
    "&end_date_month=" + (timeframe.endDate.getMonth() + 1) + "&end_date_day=" + timeframe.endDate.getDate() +
    "&end_date_year=" + timeframe.endDate.getFullYear());
  }
}
