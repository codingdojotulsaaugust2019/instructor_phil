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

  ngOnInit(){
    this.getUsersFromService();
  }

  getUsersFromService(){
    this._httpService.getUsers().subscribe(data =>{
      console.log(data);
      this.bBoomer = data['users']
    })
  }
}
