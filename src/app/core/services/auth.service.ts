import { Injectable } from '@angular/core'
import { HttpClient }from '@angular/common/http'
import { catchError, tap } from "rxjs/operators"; 
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { apiUrl } from '../utilities';
//import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000'
  constructor(private http:HttpClient, private router:Router) { }

  userIsLoggedIn(){
    return (!!localStorage.getItem('Token')) //&& !this.helper.isTokenExpired()) fix this later
  }

  login(credentials:any){
    const cred = {username:credentials.username , password:credentials.password}
    console.log(cred)
    return this.http.post(this.apiUrl+'/auth/login',cred).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('token') && localStorage.setItem('Token',res.token) 
        this.router.navigate(['/'])
      }) , 
      catchError((err)=> {
        return new Observable(res => {
          let reqData = {
            message:err.error,
            status:err.status
          }
          console.log(reqData)
          res.next(reqData)
        })})
   )
  }

  register(credentials:any){
    const cred = {name:credentials.name, email:credentials.email , password:credentials.password}
    return this.http.post(this.apiUrl+'/auth/register',cred).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('token') && localStorage.setItem('Token',res.token) 
        this.router.navigate(['/'])
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

  logout(){
    localStorage.removeItem('Token')
    this.router.navigate(['/login'])
  }
  
}




/*
login(credentials:any){
    const cred = {email:credentials.email , password:credentials.password}
    return this.http.post('http://localhost:4000/login',cred).pipe(map((response: any) => {
      let result = response;
      if(result && result.token){
        this.userIsLoggedIn = true
        return true
      }
      return false 
    }
    ),catchError((e)=>  e )
   )
  }
*/