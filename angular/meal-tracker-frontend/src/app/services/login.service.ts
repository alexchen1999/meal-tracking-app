import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = "http://localhost:8000"

  constructor( private http : HttpClient ) { }

  authenticate(username, password):Observable<any> {
    return this.http.get(this.baseurl + "/login?username=" + username + "&password=" + password);
  }
}
