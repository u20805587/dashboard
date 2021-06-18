import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WorkerRoleApiService} from "../workerRole-api.service";
import {WorkerRole} from "../workerRole.model";
import {WorkerApiService} from "../../worker/worker-api.service";
import {Worker} from "../../worker/worker.model";
import {RoleApiService} from "../../role/role-api.service";
import {Role} from "../../role/role.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './workerRole-details.component.html',
  styleUrls: ['./workerRole-details.component.scss']
})
export class WorkerRoleDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;
  workers: Worker[];
  roles: Role[];

  constructor(private _formBuilder: FormBuilder,
              private workerRoleService: WorkerRoleApiService,
              private workerService: WorkerApiService,
              private roleService: RoleApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          roleId: '',
          workerId: ''
        })
      ])
    }),

    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
     }),

     this.roleService.getRoles().subscribe(data => {
       this.roles = data;
      });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workerRoles: WorkerRole = {
    workerId: formArray[0].workerId,
    roleId: formArray[0].roleId
    }

    this.workerRoleService.addWorkerRole(workerRoles).subscribe((data) => {
      this.router.navigate(['workerroles']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
