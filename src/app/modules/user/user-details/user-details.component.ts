import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Item} from "../../worker/worker-details/worker-details.component";
import {Router} from "@angular/router";

interface Gender {
  value: string;
}

interface Title {
  value: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  roles: Item[] = [
    {value: 'Administrator'},
    {value: 'Project Manager'},
    {value: 'Supervisor'},
    {value: 'Basic User'}
  ];

  statuses: Item[] = [
    {value: 'Locked'},
    {value: 'Pending'},
    {value: 'Active'},
    {value: 'Suspended'}
  ];

  constructor(private _formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
        }),
        this._formBuilder.group({
          selectedStatus: ''
        }),
        this._formBuilder.group({

        })
      ])
    });
  }

  onSubmit() {
    console.log(this.formGroup.get('formArray') .value);
    this.router.navigate(['users']);
  }
}
