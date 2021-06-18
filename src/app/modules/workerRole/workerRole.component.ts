import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {WorkerRole} from "./workerRole.model";
import {Router} from "@angular/router";
import {WorkerRoleApiService} from "./workerRole-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './workerRole.component.html',
  styleUrls: ['./workerRole.component.scss']
})
export class WorkerRoleComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['workerId','roleId','update', 'delete'];
  public dataSource = new MatTableDataSource<WorkerRole>();

  constructor(private router: Router, private workerRoleService: WorkerRoleApiService) {
  }

  ngOnInit() {
    this.workerRoleService.getWorkerRoles().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(workerId, roleId) {
     this.router.navigate(['workerroles/edit', workerId, roleId]);
  }

  redirectToDelete(RoleId) {

  }

  addWorkerRole() {
    this.router.navigate(['workerroles/create']);
  }
}
