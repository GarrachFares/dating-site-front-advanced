import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ImageService {

  apiUrl = 'http://localhost:3000'
  

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);
    console.log("aaaaaaaaa")

    return this.http.post('http://localhost:3000/auth/upload', formData).pipe(
      tap((res:any) =>{
        res.hasOwnProperty('Token') && localStorage.setItem('Token',res.Token)
        console.log(res);
        window.location.reload()
      }) ,
      catchError((err)=> {
        return new Observable(res => {
          let reqData = {
            message:err.error,
            status:err.status
          }
          res.next(reqData)
        })})
    );
  }



}
