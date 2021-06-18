import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Role} from "./role.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {

  readonly baseUrl = 'http://localhost:8080/api/role';

  constructor(private http: HttpClient) {
  }

  addRole(body: Role): Observable<Role> {
    return this.http.post<Role>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.baseUrl}`);
  }

 getRole(roleId: string): Observable<Role> {
    return this.http.get<Role>(`${this.baseUrl}/${roleId}`);
  }

}
