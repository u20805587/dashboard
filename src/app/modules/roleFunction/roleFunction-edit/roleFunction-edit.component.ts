import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleFunctionApiService} from "../roleFunction-api.service";
import {RoleFunction} from "../roleFunction.model";
import {RoleApiService} from "../../role/role-api.service";
import {Role} from "../../role/role.model";
import {FunctionApiService} from "../../function/function-api.service";
import {Function} from "../../function/function.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './roleFunction-edit.component.html',
  styleUrls: ['./roleFunction-edit.component.scss']
})
export class RoleFunctionEditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: any;

  roles: Role[];
  functions: Function[];

  functionId: string;
  roleId: string;
  roleFunction: RoleFunction;

  constructor(private _formBuilder: FormBuilder,
              private roleFunctionService: RoleFunctionApiService,
              private roleService: RoleApiService,
              private functionService: FunctionApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.roleId = params.get('roleId');
    this.functionId = params.get('functionId');
    this.roleFunctionService.getRoleFunction(this.roleId,this.functionId).subscribe(data => {
      this.roleFunction = data;

    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
     }),

     this.functionService.getFunctions().subscribe(data => {
       this.functions = data;
      });

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            functionId: this.roleFunction.functionId,
            roleId: this.roleFunction.roleId,
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let roleFunctions: RoleFunction = {
      functionId: formArray[0].functionId,
      roleId: formArray[0].roleId
    }
    this.roleFunctionService.addRoleFunction(roleFunctions).subscribe((data) => {
      this.router.navigate(['rolefunctions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
