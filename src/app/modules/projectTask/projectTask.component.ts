import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ProjectTask} from "./projectTask.model";
import {Router} from "@angular/router";
import {ProjectTaskApiService} from "./projectTask-api.service";

@Component({
  selector: 'app-subtask',
  templateUrl: './projectTask.component.html',
  styleUrls: ['./projectTask.component.scss']
})
export class ProjectTaskComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['subtaskId','projectId','length','width','height','update', 'remove'];
  public dataSource = new MatTableDataSource<ProjectTask>();

  constructor(private router: Router, private projectTaskService: ProjectTaskApiService) {
  }

  ngOnInit() {
    this.projectTaskService.getProjectTasks().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(subtaskId, projectId) {

     this.router.navigate(['projecttasks/edit', subtaskId, projectId ]);
  }

  redirectToDelete(projectId,subtaskId) {

  }

  addProjectTask() {
    this.router.navigate(['projecttasks/create']);
  }
}
