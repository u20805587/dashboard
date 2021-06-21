import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {SubTask} from "./subtask.model";
import {Task} from "../task/task.model";
import {Router} from "@angular/router";
import {SubTaskApiService} from "./subtask-api.service";
import {TaskApiService} from "../task/task-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubTaskComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

   tasks: Task;

  public displayedColumns = ['siteTask', 'subTaskName','subTaskDescription','meterCost','squareMeterCost','cubicMeterCost','update', 'delete'];
  public dataSource = new MatTableDataSource<SubTask>();

  constructor(private router: Router, private subTaskService: SubTaskApiService
             ,private taskService: TaskApiService) {
  }

  ngOnInit() {
      this.subTaskService.getSubTasks().subscribe(data => {
      this.dataSource.data = data;
     });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(id) {
     console.log('Testing String' + id)
     this.router.navigate(['subtasks/edit',id]);
  }

  redirectToDelete(id) {

  }

  addSubTask() {
    this.router.navigate(['subtasks/create']);
  }
}
