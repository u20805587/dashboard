import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Project} from "./project.model";
import {Router} from "@angular/router";
import {ProjectApiService} from "./project-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['name', 'description', 'startDate', 'endDate', 'estimatedCost', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Project>();

  constructor(private router: Router, private projectService: ProjectApiService) {
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(id) {
     this.router.navigate(['projects/edit']);
  }

  redirectToDelete(id) {

  }

  addProject() {
    this.router.navigate(['projects/create']);
  }
}
