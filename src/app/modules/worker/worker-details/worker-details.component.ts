import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectApiService} from "../../project/project-api.service";
import {Project} from "../../project/project.model";
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

  jobTitles: Item[] = [
    {value: 'Supervisor'},
    {value: 'Project Lead'},
    {value: 'Foreman'},
    {value: 'Basic Worker'}
  ];

  projects: Project[];

  constructor(private _formBuilder: FormBuilder, private projectService: ProjectApiService,
              private workerService: WorkerApiService, private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          name: '',
          surname: '',
          idNumber: '',
          dateOfBirth: ''
        }),
        this._formBuilder.group({
          contactNumber: '',
          addressLine1: '',
          addressLine2: '',
          addressLine3: '',
          postalCode: ''
        }),
        this._formBuilder.group({
          hourlyRate: ''
        })
      ])
    });

    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let worker: Worker = {
      name: formArray[0].name,
      surname: formArray[0].surname,
      idNumber: formArray[0].idNumber,
      dateOfBirth: formArray[0].dateOfBirth,
      addressLine1: formArray[1].addressLine1,
      addressLine2: formArray[1].addressLine2,
      addressLine3: formArray[1].addressLine3,
      postalCode: formArray[1].postalCode
    }
    this.workerService.addWorker(worker).subscribe((data) => {
      this.router.navigate(['workers']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
