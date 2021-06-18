import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WorkerRole} from "./workerRole.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkerRoleApiService {

  readonly baseUrl = 'http://localhost:8080/api/workerrole';

  constructor(private http: HttpClient) {
  }

  addWorkerRole(body: WorkerRole): Observable<WorkerRole> {
    return this.http.post<WorkerRole>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getWorkerRoles(): Observable<WorkerRole[]> {
    return this.http.get<WorkerRole[]>(`${this.baseUrl}`);
  }

 getWorkerRole(workerId: string,roleId: string): Observable<WorkerRole> {
    return this.http.get<WorkerRole>(`${this.baseUrl}/${workerId}/${roleId}`);
  }

}
