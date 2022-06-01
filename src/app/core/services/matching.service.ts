import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import { RoomI } from '../Model/room.interface';
import { ChatService } from './chat-service/chat.service';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {
  apiUrl = 'http://localhost:3000'

  constructor(private http:HttpClient , private chatService:ChatService) { }

  sendChoice(chosenPeople : any, roomId : number){
    const data = {
      room : roomId ,
      preferenceList : chosenPeople
    }
    console.log("sending ..")
    this.chatService.sendChoice(data)
    // return this.http.post(this.apiUrl+'/matching',data).subscribe(res =>{
    //   console.log(res)
    // })
  }

}


// pipe(
//   tap((res:any) =>{
    
//     console.log(res, "sending choice worked");
//     //this.router.navigate(['/explore'])
//   }) ,
//   catchError((err)=> {
//     console.log(err)
//     return new Observable(res => {
//       let reqData = {
//         message:err.error,
//         status:err.status
//       }
//       res.next(reqData)
//     })})
// )
