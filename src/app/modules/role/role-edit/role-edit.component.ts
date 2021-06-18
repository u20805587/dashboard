import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleApiService} from "../role-api.service";
import {Role} from "../role.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  roleId: string;
  description: string;
  role: Role;

  constructor(private _formBuilder: FormBuilder, private roleService: RoleApiService,
              private router: Router,private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.roleId = params.get('roleId');
    this.roleService.getRole(this.roleId).subscribe(data => {
      this.role = data;

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            roleId: this.role.roleId,
            description: this.role.description,
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let roles: Role = {
      roleId: formArray[0].roleId,
      description: formArray[0].description
    }
    this.roleService.addRole(roles).subscribe((data) => {
      this.router.navigate(['roles']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
