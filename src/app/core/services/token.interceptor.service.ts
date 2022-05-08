import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("Token");
        console.log("aaaaaa"+idToken);
        

        if (idToken) {
            const cloned = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${idToken}`
                  }
                //headers: req.headers.set("Authorization",
                    //"Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}