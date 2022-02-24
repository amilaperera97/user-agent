import { Component, OnInit } from '@angular/core';
import { UserAgentInfo } from 'src/app/dto/data';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  userAgent: string | undefined;
  date: Date | undefined;
  userAgentInfo: UserAgentInfo = new UserAgentInfo;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.userAgent = window.navigator.userAgent;
    this.date = new Date();
    
    this.userAgentInfo.userAgent = this.userAgent;
    this.userAgentInfo.timestamp = this.date.toString();
    
    this.firebaseService.save(this.userAgentInfo);
  }

}
