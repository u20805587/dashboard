import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {ProjectTaskLog} from "./projectTaskLog.model";
import {Router} from "@angular/router";
import {ProjectTaskLogApiService} from "./projectTaskLog-api.service";

@Component({
  selector: 'app-subTaskLog',
  templateUrl: './projectTaskLog.component.html',
  styleUrls: ['./projectTaskLog.component.scss']
})
export class ProjectTaskLogComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['subtaskId','projectId','workDate','length','width','height'];
  public dataSource = new MatTableDataSource<ProjectTaskLog>();

  constructor(private router: Router, private projectTaskLogService: ProjectTaskLogApiService) {
  }

  ngOnInit() {
    this.projectTaskLogService.getProjectTaskLogs().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(subtaskId, projectId, workDate) {

     this.router.navigate(['projecttasklogs/edit', subtaskId, projectId ]);
  }

  redirectToDelete(subtaskId,projectId,workDate) {

  }

  addProjectTaskLog() {
    this.router.navigate(['projecttasklogs/create']);
  }
}
