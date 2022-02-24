import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAgentInfo } from '../dto/data';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http:HttpClient) { }

  save(userAgentInfo:UserAgentInfo):void{
    console.log("POST");
    let response = this.http.post<any>("https://user-agent-2c29b-default-rtdb.firebaseio.com/info.json",JSON.stringify(userAgentInfo))
    .subscribe(data => {
      console.log(data);
    });
    
  }

  fetch():Observable<any>{
    return this.http.get("https://user-agent-2c29b-default-rtdb.firebaseio.com/info.json");
  }
}
