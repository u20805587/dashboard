import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectTask} from "./ProjectTask.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectTaskApiService {

  readonly baseUrl = 'http://localhost:8080/api/projecttask';

  constructor(private http: HttpClient) {
  }

  addProjectTask(body: ProjectTask): Observable<ProjectTask> {
    return this.http.post<ProjectTask>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getProjectTasks(): Observable<ProjectTask[]> {
    return this.http.get<ProjectTask[]>(`${this.baseUrl}`);
  }

 getProjectTask(subtaskId: string,projectId: string): Observable<ProjectTask> {
    return this.http.get<ProjectTask>(`${this.baseUrl}/${subtaskId}/${projectId}`);
  }

}
