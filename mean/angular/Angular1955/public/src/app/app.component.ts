import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}
  title = 'Phil';
  bBoomer = [];
  user: any;
  onCreateErrors: any;
  onUpdateErrors: any;
  toUpdateUser:boolean = false;
  editUser: any;
  parentShowUser: any;

  ngOnInit(){
    this.getUsersFromService();
    this.user = {name: ""}
  }

  getUsersFromService(){
    this._httpService.getUsers().subscribe(data =>{
      console.log(data);
      this.bBoomer = data['users']
    })
  }
  
  onSubmit(){
    console.log("in Angular onSubmit", this.user)
    this._httpService.createUser(this.user).subscribe(data => {
      console.log(data);
      if(data['status']) {
        // successfully add a user
        this.onCreateErrors = undefined;
        this.ngOnInit();
      } else {
        // display the error messages
        this.onCreateErrors = data["errors"];
      }
    })
    this.user = {name: ""}
  }
  editUserForm  (userId: String) {
    this.toUpdateUser = true;
    console.log(`user id is ${userId}`);
    this._httpService.getOneUser(userId)
    .subscribe(responseFromHTTPService => {
      console.log(responseFromHTTPService);
      this.editUser = responseFromHTTPService["user"];
    })
  }
  updateUser() {
    this._httpService.editUser(this.editUser)
    .subscribe(responseFromService => {
      console.log(responseFromService);
      if(responseFromService['status']) {
        this.getUsersFromService();
        this.onUpdateErrors = undefined;
        this.toUpdateUser = false;
      } else {
        // display the error message
        this.onUpdateErrors = responseFromService["errors"];
      }
    })
  }
  deleteUser(userId: String) {
    this._httpService.deleteUser(userId)
    .subscribe(responseFromService => {
      console.log(responseFromService);
      if(responseFromService['status']) {
        this.getUsersFromService();
      } else {
        // display the error message
        console.log(responseFromService["errors"]);
      }
    })
  }

  getUser(userId: String) {
    this._httpService.getOneUser(userId)
    .subscribe(responseFromService => {
      if(responseFromService['status']) {
        this.parentShowUser = responseFromService['user'];
        console.log(this.parentShowUser);
      }
    })
  }
}
