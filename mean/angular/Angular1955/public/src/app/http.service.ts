import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get('/users')
  }

  createUser(user){
    console.log("In the service create user")
    return this._http.post('/users', user);
  }
  
}
