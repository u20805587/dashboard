import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

  readonly baseUrl = 'http://localhost:8080/api/access';

  constructor(private http: HttpClient) {
  }
   isUserLoggedIn: boolean = false;
   currentUser: string = '';

   login(userName: string, password: string): Observable<any> {
      console.log(userName);
      console.log(password);
      this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");
      localStorage.setItem('currentUser', userName);

   return of(this.isUserLoggedIn).pipe(
      delay(1000),
      tap(val => {
         console.log("Is User Authentication is successful: " + val);
      })
   );
   }

   logout(): void {
   this.isUserLoggedIn = false;
   this.currentUser = '';
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('currentUser');
   }

//    getAccess(functionId: string): Observable<Any>{
//       return this.http.get<Any>(`${this.baseUrl}/${localStorage.userName}/${functionId}`);
//    }

}
