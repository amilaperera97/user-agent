import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  userAgent:string | undefined;
  date:Date | undefined;

  constructor() { }

  ngOnInit(): void {
    this.userAgent = window.navigator.userAgent;
    this.date = new Date();
  }

}
