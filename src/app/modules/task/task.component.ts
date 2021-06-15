import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Task} from "./task.model";
import {Router} from "@angular/router";
import {TaskApiService} from "./task-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['name', 'description','update', 'delete'];
  public dataSource = new MatTableDataSource<Task>();

  constructor(private router: Router, private taskService: TaskApiService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(id) {
     console.log('Testing String' + id)
     this.router.navigate(['tasks/edit',id]);
  }

  redirectToDelete(id) {

  }

  addTask() {
    this.router.navigate(['tasks/create']);
  }
}
