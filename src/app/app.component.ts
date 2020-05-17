import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-one-tap-signin';
  token: string;

  constructor() {

  }

  ngOnInit() {
    this.token = localStorage.getItem("accessToken");
    console.log(this.token);
    
  }

}
