import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Role} from "./role.model";
import {Router} from "@angular/router";
import {RoleApiService} from "./role-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['roleId', 'description','update', 'delete'];
  public dataSource = new MatTableDataSource<Role>();

  constructor(private router: Router, private roleService: RoleApiService) {
  }

  ngOnInit() {
    this.roleService.getRoles().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(roleId) {
     console.log('Testing String' + roleId)
     this.router.navigate(['roles/edit',roleId]);
  }

  redirectToDelete(id) {

  }

  addRole() {
    this.router.navigate(['roles/create']);
  }
}
