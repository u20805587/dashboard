import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectApiService} from "../project-api.service";
import {Project} from "../project.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

interface Status {
  value: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  statuses: Status[] = [
    {value: 'In Progress'},
    {value: 'Not Started'},
    {value: 'Cancelled'},
    {value: 'On Hold'},
    {value: 'Quotation'}
  ];

  name: string;
  description: string;
  id: string;
  project: Project;

  constructor(private _formBuilder: FormBuilder, private projectService: ProjectApiService,
              private router: Router,private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.projectService.getProject(parseInt(this.id, 10)).subscribe(data => {
      this.project = data;

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            name: this.project.name,
            description: this.project.description,
            acquiredDate: this.project.acquiredDate
          }),
          this._formBuilder.group({
            estimatedCost: this.project.estimatedCost,
            estimatedStartDate: this.project.estimatedEndDate,
            estimatedEndDate: this.project.estimatedEndDate
          }),
          this._formBuilder.group({
            notes: '',
            dailyHours: '',
            maximumAllowedHours: '',
            projectStatus: ''
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let project: Project = {
      id: this.project.id,
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
