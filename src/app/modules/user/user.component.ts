import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['name', 'surname', 'idNumber', 'dateOfBirth', 'gender', 'role', 'view'];
  public dataSource = new MatTableDataSource<User>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSave() {

  }

  addUser() {
    this.router.navigate(['users/setup']);
  }

  viewUser(id) {

  }
}
