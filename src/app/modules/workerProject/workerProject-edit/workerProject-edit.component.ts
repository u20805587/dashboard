import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WorkerProjectApiService} from "../workerProject-api.service";
import {WorkerProject} from "../workerProject.model";
import {WorkerApiService} from "../../worker/worker-api.service";
import {Worker} from "../../worker/worker.model";
import {ProjectApiService} from "../../project/project-api.service";
import {Project} from "../../project/project.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

  export interface Item {
    value: string;
  }

@Component({
  selector: 'app-details',
  templateUrl: './workerProject-edit.component.html',
  styleUrls: ['./workerProject-edit.component.scss']
})
export class WorkerProjectEditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: any;

  yesNo: Item[] = [
    {value: 'Y'},
    {value: 'N'}
  ];

  workers: Worker[];
  projects: Project[];

  projectId: string;
  workerId: string;
  workerProject: WorkerProject;

  constructor(private _formBuilder: FormBuilder,
              private workerProjectService: WorkerProjectApiService,
              private workerService: WorkerApiService,
              private projectService: ProjectApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.workerId = params.get('workerId');
    this.projectId = params.get('projectId');
    console.log("Aubrey Values"+this.workerId+ " value "+ this.projectId);
    this.workerProjectService.getWorkerProject(this.workerId,this.projectId).subscribe(data => {
      this.workerProject = data;

    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
     }),

     this.projectService.getProjects().subscribe(data => {
       this.projects = data;
      }),

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            workerId: this.workerId,
            projectId: this.projectId,
            hourlyRate: this.workerProject.hourlyRate

          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workerProjects: WorkerProject = {
      workerId: formArray[0].workerId,
      projectId: formArray[0].projectId,
      hourlyRate: formArray[0].hourlyRate
    }
    this.workerProjectService.addWorkerProject(workerProjects).subscribe((data) => {
      this.router.navigate(['workerprojects']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
