import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Worker} from "../worker.model";
import {Router} from "@angular/router";
import {WorkerApiService} from "../worker-api.service";
import {ActivatedRoute} from "@angular/router";

export interface Item {
  value: string;
}

@Component({
  selector: 'app-worker',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.scss']
})
export class WorkerEditComponent implements OnInit {

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

  workerId: string;
  worker: Worker;

  constructor(private _formBuilder: FormBuilder,
              private workerService: WorkerApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {

    this.workerId = params.get('workerId');
    this.workerService.getWorker(parseInt(this.workerId, 10)).subscribe(data => {
      this.worker = data;

    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          name: this.worker.name,
          middleName: this.worker.middleName,
          surname: this.worker.surname,
          idNumber: this.worker.idNumber,
          birthDate: this.worker.birthDate,
          gender: this.worker.gender
        }),
        this._formBuilder.group({
          contactNumber: this.worker.contactNumber,
          addressLine1: this.worker.addressLine1,
          addressLine2: this.worker.addressLine2,
          addressLine3: this.worker.addressLine3,
          postalCode: this.worker.postalCode
        }),
        this._formBuilder.group({
          hourlyRate: this.worker.hourlyRate,
          username: this.worker.username,
          password: this.worker.password,
          userStatus: this.worker.userStatus
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workers: Worker = {
      workerId: this.worker.workerId,
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
    this.workerService.addWorker(workers).subscribe((data) => {
      this.router.navigate(['workers']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
