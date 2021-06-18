import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleApiService} from "../role-api.service";
import {Role} from "../role.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.scss']
})
export class RoleDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  constructor(private _formBuilder: FormBuilder, private roleService: RoleApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          roleId: '',
          description: ''
        })
      ])
    });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let role: Role = {
      roleId: formArray[0].roleId,
      description: formArray[0].description
    }

    this.roleService.addRole(role).subscribe((data) => {
      this.router.navigate(['roles']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
