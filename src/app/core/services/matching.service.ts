import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MatchingService {
  apiUrl = 'http://localhost:3000'

  constructor(private http:HttpClient ) { }

  sendChoice(chosenPeople : any){
    console.log("sending ..")
    return this.http.post(this.apiUrl+'/matching',chosenPeople).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        console.log(res);
        //this.router.navigate(['/explore'])
      }) ,
      catchError((err)=> {
        return new Observable(res => {
          let reqData = {
            message:err.error,
            status:err.status
          }
          res.next(reqData)
        })})
    )
  }

}
