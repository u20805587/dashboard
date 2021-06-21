import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Worker} from "./worker.model";
import {Router} from "@angular/router";
import {WorkerApiService} from "./worker-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['name', 'middleName', 'surname', 'idNumber', 'birthDate', 'gender', 'update','delete'];
  public dataSource = new MatTableDataSource<Worker>();

  constructor(private router: Router, private workerService: WorkerApiService) {
  }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(workerId) {
     this.router.navigate(['workers/edit',workerId]);
  }

  redirectToDelete(id) {

  }

  addWorker() {
    this.router.navigate(['workers/create']);
  }
}
