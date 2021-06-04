import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Project} from "./project.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  readonly baseUrl = 'http://localhost:8080/api/project';

  constructor(private http: HttpClient) {
  }

  addProject(body: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}`, JSON.stringify(body),
      {headers: new HttpHeaders().set('Content-Type', 'application/json; charset=UTF-8')});
  }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}`);
  }
}
