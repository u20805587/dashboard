import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskApiService} from "../task-api.service";
import {Task} from "../task.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  constructor(private _formBuilder: FormBuilder, private taskService: TaskApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          name: '',
          description: ''
        })
      ])
    });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let task: Task = {
      name: formArray[0].name,
      description: formArray[0].description
    }

    this.taskService.addTask(task).subscribe((data) => {
      this.router.navigate(['tasks']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
