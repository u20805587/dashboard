import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {WorkerProject} from "./workerProject.model";
import {Router} from "@angular/router";
import {WorkerProjectApiService} from "./workerProject-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './workerProject.component.html',
  styleUrls: ['./workerProject.component.scss']
})
export class WorkerProjectComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['workerId','projectId','hourlyRate','update', 'remove'];
  public dataSource = new MatTableDataSource<WorkerProject>();

  constructor(private router: Router, private workerProjectService: WorkerProjectApiService) {
  }

  ngOnInit() {
    this.workerProjectService.getWorkerProjects().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(workerId, projectId) {

     this.router.navigate(['workerprojects/edit', workerId, projectId]);
  }

  redirectToDelete(projectId) {

  }

  addWorkerProject() {
    this.router.navigate(['workerprojects/create']);
  }
}
