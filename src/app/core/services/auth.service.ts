import { Injectable } from '@angular/core'
import { HttpClient }from '@angular/common/http'
import { catchError, tap } from "rxjs/operators";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { apiUrl } from '../utilities';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  apiUrl = 'http://localhost:3000'
  constructor(private http:HttpClient,
              private router:Router,
              private jwtHelper :JwtHelperService
  ) { }

  userIsLoggedIn(){
    return (!!localStorage.getItem('Token')) //&& !this.helper.isTokenExpired()) fix this later
  }

  login(credentials:any){
    const cred = {username:credentials.username , password:credentials.password}
    //console.log(cred)
    return this.http.post(this.apiUrl+'/auth/login',cred).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        //this.router.navigate(['explore'])
        window.location.href="/explore" ;
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
    const cred = {
      firstName:credentials.firstname,
      lastName:credentials.lastname,
      email:credentials.email ,
      password:credentials.password ,
      username:credentials.username,
      country:credentials.country,
      birthDate:credentials.date,
      sexe:credentials.sexe
    }
    return this.http.post(this.apiUrl+'/auth/register',cred).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        this.router.navigate(['categories'])
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
    this.router.navigate(['/'])
  }

  getLoggedInUser() {
    let token = this.getDecodedToken();
    if(!token){
      return null;
    }
    return JSON.parse(token) ;
  }

  getDecodedToken(){
    let token = localStorage.getItem('Token')
    if(!token){
      // token = "{}"
      return null ;
    }
    //console.log(this.jwtHelper.decodeToken(token))
    let tokenPayload = JSON.stringify(this.jwtHelper.decodeToken(token));
    //console.log(tokenPayload)
    return tokenPayload;
  }

  editProfil(credentials:any){
    const cred = {
      firstname:credentials.firstname,
      lastname:credentials.lastname,
      email:credentials.email ,
      username:credentials.username,
      country:credentials.country,
      city:credentials.city,
      id:credentials.id
    }
    return this.http.post(this.apiUrl+'/auth/editprofil',cred).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        console.log(res);
        this.router.navigate(['/explore'])
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

  changepassword(passwordsform:any){
    const passwords = {
      oldpassword:passwordsform.currentpassword,
      newpassword:passwordsform.newpassword,
      id:passwordsform.id
    }
    return this.http.post(this.apiUrl+'/auth/changepassword',passwords).pipe(
      tap((res:any) =>{
       // res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        console.log(res);
        window.location.reload()
        this.router.navigate(['/explore'])
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

  addCategories( mycategories: number[]) {
    return this.http.post(this.apiUrl+'/user/addcategories',{categories:mycategories}).pipe(
      tap((res:any) =>{
        //res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        console.log(res);
        //this.router.navigate(['/explore'])
      }) ,
      catchError((err)=> {
        console.log(err)
        return new Observable(res => {
          let reqData = {
            message:err.error,
            status:err.status
          }
          res.next(reqData)
        })})
   )
  }

  getCategories() {
    return this.http.get(this.apiUrl+'/user/categories').pipe(
      tap((res:any) =>{
        //res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        console.log(res);
        //this.router.navigate(['/explore'])
      }) ,
      catchError((err)=> {
        console.log(err)
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
