import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  baseurl = "http://localhost:8000"
  csrftoken = this.getCookie('csrftoken');

  constructor(private http : HttpClient) {  }

  register(username, name, password):Observable<any> {
    console.log(username)
    console.log(name)
    return this.http.post(this.baseurl + "/register", {'username': username, 
      'name': name, 'password': password}, {headers: {'Content-Type': 'application/json'} });

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
