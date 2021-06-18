import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Worker} from "../worker.model";
import {Router} from "@angular/router";
import {WorkerApiService} from "../worker-api.service";

export interface Item {
  value: string;
}

@Component({
  selector: 'app-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.scss']
})
export class WorkerDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;
  genders: Item[] = [
    {value: 'Male'},
    {value: 'Female'}
  ];

  statuses: Item[] = [
    {value: 'Active'},
    {value: 'Locked'},
    {value: 'Inactive'}
  ];

  jobTitles: Item[] = [
    {value: 'Supervisor'},
    {value: 'Project Lead'},
    {value: 'Foreman'},
    {value: 'Basic Worker'}
  ];

  constructor(private _formBuilder: FormBuilder,
              private workerService: WorkerApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          name: '',
          middleName: '',
          surname: '',
          idNumber: '',
          birthDate: '',
          gender: ''
        }),
        this._formBuilder.group({
          contactNumber: '',
          addressLine1: '',
          addressLine2: '',
          addressLine3: '',
          postalCode: ''
        }),
        this._formBuilder.group({
          hourlyRate: '',
          username: '',
          password: '',
          userStatus: ''
        })
      ])
    });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let worker: Worker = {
      name: formArray[0].name,
      middleName: formArray[0].middleName,
      surname: formArray[0].surname,
      idNumber: formArray[0].idNumber,
      birthDate: formArray[0].birthDate,
      gender: formArray[0].gender,
      addressLine1: formArray[1].addressLine1,
      addressLine2: formArray[1].addressLine2,
      addressLine3: formArray[1].addressLine3,
      postalCode: formArray[1].postalCode,
      hourlyRate: formArray[2].hourlyRate,
      nationality: '',
      siteWorkerCategory: '',
      username: formArray[2].username,
      password: formArray[2].password,
      userStatus: formArray[2].userStatus,
      stateCode: ''
    }
    this.workerService.addWorker(worker).subscribe((data) => {
      this.router.navigate(['workers']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
