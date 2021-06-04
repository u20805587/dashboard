import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Project} from "../project/project.model";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {

  projects: Project[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['name', 'description', 'project', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Project>();

  constructor() {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
  }

  view(id) {

  }

  delete(id) {

  }

  addTask() {

  }
}
