import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskApiService} from "../task-api.service";
import {Task} from "../task.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  name: string;
  description: string;
  id: string;
  task: Task;

  constructor(private _formBuilder: FormBuilder, private taskService: TaskApiService,
              private router: Router,private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.taskService.getTasks(parseInt(this.id, 10)).subscribe(data => {
      this.task = data;

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            name: this.task.name,
            description: this.task.description,
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let task: Task = {
      id: this.task.id,
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
