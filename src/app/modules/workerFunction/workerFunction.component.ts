import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {WorkerFunction} from "./workerFunction.model";
import {Router} from "@angular/router";
import {WorkerFunctionApiService} from "./workerFunction-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './workerFunction.component.html',
  styleUrls: ['./workerFunction.component.scss']
})
export class WorkerFunctionComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['workerId','functionId','update', 'delete'];
  public dataSource = new MatTableDataSource<WorkerFunction>();

  constructor(private router: Router, private workerFunctionService: WorkerFunctionApiService) {
  }

  ngOnInit() {
    this.workerFunctionService.getWorkerFunctions().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(workerId, functionId) {
     this.router.navigate(['workerfunctions/edit', workerId, functionId]);
  }

  redirectToDelete(functionId) {

  }

  addWorkerFunction() {
    this.router.navigate(['workerfunctions/create']);
  }
}
