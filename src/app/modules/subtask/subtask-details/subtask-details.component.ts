import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SubTaskApiService} from "../subtask-api.service";
import {SubTask} from "../subtask.model";
import {TaskApiService} from "../../task/task-api.service";
import {Task} from "../../task/task.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './subtask-details.component.html',
  styleUrls: ['./subtask-details.component.scss']
})
export class SubTaskDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  tasks: Task[];

  constructor(private _formBuilder: FormBuilder
              , private subtaskService: SubTaskApiService
              , private taskService: TaskApiService
              , private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          id: '',
          siteTask: '',
          subTaskName: '',
          subTaskDescription: '',
          meterCost: '',
          squareMeterCost: '',
          cubicMeterCost: ''
        })
      ])
    }),

  this.taskService.getTasks().subscribe(data => {
    this.tasks = data;
   });

  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
     (error => {
          console.log('Aubrey Value: ' + formArray[0].task);})
    let subtask: SubTask = {
      subTaskName: formArray[0].subTaskName,
      subTaskDescription: formArray[0].subTaskDescription,
      siteTask: formArray[0].task
    }

    this.subtaskService.addSubTask(subtask).subscribe((data) => {
      this.router.navigate(['subtasks']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
