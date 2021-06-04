import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectApiService} from "../project-api.service";
import {Project} from "../project.model";
import {Router} from "@angular/router";

interface Status {
  value: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  statuses: Status[] = [
    {value: 'In Progress'},
    {value: 'Not Started'},
    {value: 'Cancelled'},
    {value: 'On Hold'},
    {value: 'Quotation'}
  ];

  constructor(private _formBuilder: FormBuilder, private projectService: ProjectApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          name: '',
          description: '',
          acquiredDate: ''
        }),
        this._formBuilder.group({
          estimatedCost: '',
          estimatedStartDate: '',
          estimatedEndDate: ''
        }),
        this._formBuilder.group({
          notes: '',
          dailyHours: '',
          maximumAllowedHours: '',
          projectStatus: ''
        })
      ])
    });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let project: Project = {
      name: formArray[0].name,
      description: formArray[0].description,
      acquiredDate: formArray[0].acquiredDate,
      estimatedCost: formArray[1].estimatedCost,
      estimatedStartDate: formArray[1].estimatedStartDate,
      estimatedEndDate: formArray[1].estimatedEndDate,
      status: formArray[2].status,
      notes: formArray[2].notes,
      defaultDailyHours: formArray[2].defaultDailyHours,
      maximumAllowedHours: formArray[2].maximumAllowedHours
    }

    this.projectService.addProject(project).subscribe((data) => {
      this.router.navigate(['projects']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
