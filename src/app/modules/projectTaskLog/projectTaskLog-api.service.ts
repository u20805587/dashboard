import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectTaskLog} from "./projectTaskLog.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskLogApiService {

  readonly baseUrl = 'http://localhost:8080/api/projecttasklog';

  constructor(private http: HttpClient) {
  }

  addProjectTaskLog(body: ProjectTaskLog): Observable<ProjectTaskLog> {
    return this.http.post<ProjectTaskLog>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getProjectTaskLogs(): Observable<ProjectTaskLog[]> {
    return this.http.get<ProjectTaskLog[]>(`${this.baseUrl}`);
  }

 getProjectTaskLog(subtaskId: string,projectId: string,workDate: Date): Observable<ProjectTaskLog> {
    return this.http.get<ProjectTaskLog>(`${this.baseUrl}/${subtaskId}/${projectId}/${workDate}`);
  }

}
