import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);
    console.log("aaaaaaaaa")

    return this.http.post('http://localhost:3000/user/upload', formData);
  }
}
