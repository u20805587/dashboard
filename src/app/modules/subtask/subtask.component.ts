import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SubTask} from "../subtask/subtask.model";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.scss']
})
export class SubTaskComponent implements OnInit, AfterViewInit {

  //tasks: Task[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['subTaskName', 'subTaskDescription', 'meterCost', 'update', 'delete'];
  public dataSource = new MatTableDataSource<SubTask>();

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

  addSubTask() {

  }
}
