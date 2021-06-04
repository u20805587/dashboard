import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Router} from "@angular/router";
import {WorkerService} from "./worker.service";
import {SiteWorker} from "./worker.model";

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss']
})
export class WorkerComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['name', 'surname', 'idNumber', 'dateOfBirth', 'gender', 'assignedProject', 'view'];
  public dataSource = new MatTableDataSource<SiteWorker>();

  constructor(private router: Router, private workerService: WorkerService) { }

  ngOnInit() {
    this.workerService.getWorkers().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  addWorker() {
    this.router.navigate(['workers/setup']);
  }

  viewDetails(id) {

  }
}
