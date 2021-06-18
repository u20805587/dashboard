import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {RoleFunction} from "./roleFunction.model";
import {Router} from "@angular/router";
import {RoleFunctionApiService} from "./roleFunction-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './roleFunction.component.html',
  styleUrls: ['./roleFunction.component.scss']
})
export class RoleFunctionComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['roleId','functionId','update', 'delete'];
  public dataSource = new MatTableDataSource<RoleFunction>();

  constructor(private router: Router, private roleFunctionService: RoleFunctionApiService) {
  }

  ngOnInit() {
    this.roleFunctionService.getRoleFunctions().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(roleId, functionId) {
     this.router.navigate(['rolefunctions/edit', roleId, functionId]);
  }

  redirectToDelete(functionId) {

  }

  addRoleFunction() {
    this.router.navigate(['rolefunctions/create']);
  }
}
