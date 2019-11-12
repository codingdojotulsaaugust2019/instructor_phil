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
  
  getOneUser(userId: String) {
    return this._http.get(`/users/${userId}`);
  }

  editUser(user: any) {
    return this._http.put(`/users/${user._id}`, user);
  }

  deleteUser(userId: String) {
    return this._http.delete(`/users/${userId}`);
  }
}
