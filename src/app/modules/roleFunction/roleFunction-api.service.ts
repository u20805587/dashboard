import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RoleFunction} from "./roleFunction.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleFunctionApiService {

  readonly baseUrl = 'http://localhost:8080/api/rolefunction';

  constructor(private http: HttpClient) {
  }

  addRoleFunction(body: RoleFunction): Observable<RoleFunction> {
    return this.http.post<RoleFunction>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getRoleFunctions(): Observable<RoleFunction[]> {
    return this.http.get<RoleFunction[]>(`${this.baseUrl}`);
  }

 getRoleFunction(roleId: string,functionId: string): Observable<RoleFunction> {
    return this.http.get<RoleFunction>(`${this.baseUrl}/${roleId}/${functionId}`);
  }

}
