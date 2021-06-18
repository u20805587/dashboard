import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from "@angular/material";
import {Function} from "./function.model";
import {Router} from "@angular/router";
import {FunctionApiService} from "./function-api.service";

@Component({
  selector: 'app-worker',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public displayedColumns = ['functionId', 'description','update', 'delete'];
  public dataSource = new MatTableDataSource<Function>();

  constructor(private router: Router, private functionService: FunctionApiService) {
  }

  ngOnInit() {
    this.functionService.getFunctions().subscribe(data => {
      this.dataSource.data = data;
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  redirectToDetails(functionId) {
     console.log('Testing String' + functionId)
     this.router.navigate(['functions/edit',functionId]);
  }

  redirectToDelete(functionId) {

  }

  addFunction() {
    this.router.navigate(['functions/create']);
  }
}
