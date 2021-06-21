import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProjectTaskApiService} from "../projectTask-api.service";
import {ProjectTask} from "../projectTask.model";
import {SubTaskApiService} from "../../subtask/subtask-api.service";
import {SubTask} from "../../subtask/subtask.model";
import {ProjectApiService} from "../../project/project-api.service";
import {Project} from "../../project/project.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

  export interface Item {
    value: string;
  }

@Component({
  selector: 'app-details',
  templateUrl: './projectTask-edit.component.html',
  styleUrls: ['./projectTask-edit.component.scss']
})
export class ProjectTaskEditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: any;

  statuses: Item[] = [
    {value: 'Active'},
    {value: 'Completed'},
    {value: 'Suspended'},
    {value: 'Inactive'}
  ];

  units: Item[] = [
    {value: 'Meters'},
    {value: 'Square Meters'},
    {value: 'Cubic Meters'}
  ];

  subtasks: SubTask[];
  projects: Project[];

  projectId: string;
  subtaskId: string;
  projectTask: ProjectTask;

  constructor(private _formBuilder: FormBuilder,
              private projectTaskService: ProjectTaskApiService,
              private subtaskService: SubTaskApiService,
              private projectService: ProjectApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.subtaskId = params.get('subtaskId');
    this.projectId = params.get('projectId');
    console.log("Aubrey Values"+this.subtaskId+ " value "+ this.projectId);
    this.projectTaskService.getProjectTask(this.subtaskId,this.projectId).subscribe(data => {
      this.projectTask = data;

    this.subtaskService.getSubTasks().subscribe(data => {
      this.subtasks = data;
     }),

     this.projectService.getProjects().subscribe(data => {
       this.projects = data;
      }),

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            subtaskId: this.subtaskId,
            projectId: this.projectId,
            status: this.projectTask.status,
            unit: this.projectTask.unit
          }),
          this._formBuilder.group({
            length: this.projectTask.length,
            width: this.projectTask.width,
            height: this.projectTask.height
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let projectTasks: ProjectTask = {
      subtaskId: formArray[0].subtaskId,
      projectId: formArray[0].projectId,
      unit: formArray[0].unit,
      status: formArray[0].status,
      length: formArray[1].length,
      width: formArray[1].width,
      height: formArray[1].height
    }
    this.projectTaskService.addProjectTask(projectTasks).subscribe((data) => {
      this.router.navigate(['projecttasks']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
