import { Component, OnInit } from '@angular/core';
import { UserAgentInfo } from 'src/app/dto/data';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.sass']
})
export class DataListComponent implements OnInit {

  userAgentInfo: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    
    this.firebaseService.fetch().subscribe(agentData=>{
      this.userAgentInfo=JSON.stringify(agentData);
      }
    );
  }

}
