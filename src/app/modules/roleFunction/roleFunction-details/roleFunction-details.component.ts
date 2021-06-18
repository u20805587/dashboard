import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleFunctionApiService} from "../roleFunction-api.service";
import {RoleFunction} from "../roleFunction.model";
import {RoleApiService} from "../../role/role-api.service";
import {Role} from "../../role/role.model";
import {FunctionApiService} from "../../function/function-api.service";
import {Function} from "../../function/function.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './roleFunction-details.component.html',
  styleUrls: ['./roleFunction-details.component.scss']
})
export class RoleFunctionDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;
  roles: Role[];
  functions: Function[];

  constructor(private _formBuilder: FormBuilder,
              private roleFunctionService: RoleFunctionApiService,
              private roleService: RoleApiService,
              private functionService: FunctionApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          functionId: '',
          roleId: ''
        })
      ])
    }),

    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
     }),

     this.functionService.getFunctions().subscribe(data => {
       this.functions = data;
      });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let roleFunctions: RoleFunction = {
    roleId: formArray[0].roleId,
    functionId: formArray[0].functionId
    }
     console.log('Aubrey Test: ' + roleFunctions.roleId)
    this.roleFunctionService.addRoleFunction(roleFunctions).subscribe((data) => {
      this.router.navigate(['rolefunctions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
