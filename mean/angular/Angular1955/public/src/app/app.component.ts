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
      this.ngOnInit();
    })
    this.user = {name: ""}
  }
}
