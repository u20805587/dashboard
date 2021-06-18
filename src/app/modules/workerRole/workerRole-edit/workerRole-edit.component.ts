import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WorkerRoleApiService} from "../workerRole-api.service";
import {WorkerRole} from "../workerRole.model";
import {WorkerApiService} from "../../worker/worker-api.service";
import {Worker} from "../../worker/worker.model";
import {RoleApiService} from "../../role/role-api.service";
import {Role} from "../../role/role.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './workerRole-edit.component.html',
  styleUrls: ['./workerRole-edit.component.scss']
})
export class WorkerRoleEditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: any;

  workers: Worker[];
  roles: Role[];

  roleId: string;
  workerId: string;
  workerRole: WorkerRole;

  constructor(private _formBuilder: FormBuilder,
              private workerRoleService: WorkerRoleApiService,
              private workerService: WorkerApiService,
              private roleService: RoleApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.workerId = params.get('workerId');
    this.roleId = params.get('roleId');
    this.workerRoleService.getWorkerRole(this.workerId,this.roleId).subscribe(data => {
      this.workerRole = data;

    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
     }),

     this.roleService.getRoles().subscribe(data => {
       this.roles = data;
      });

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            roleId: this.workerRole.roleId,
            workerId: this.workerRole.workerId,
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workerRoles: WorkerRole = {
      roleId: formArray[0].roleId,
      workerId: formArray[0].workerId
    }
    this.workerRoleService.addWorkerRole(workerRoles).subscribe((data) => {
      this.router.navigate(['workerfunctions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
