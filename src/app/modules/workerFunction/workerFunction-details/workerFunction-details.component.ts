import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WorkerFunctionApiService} from "../workerFunction-api.service";
import {WorkerFunction} from "../workerFunction.model";
import {WorkerApiService} from "../../worker/worker-api.service";
import {Worker} from "../../worker/worker.model";
import {FunctionApiService} from "../../function/function-api.service";
import {Function} from "../../function/function.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './workerFunction-details.component.html',
  styleUrls: ['./workerFunction-details.component.scss']
})
export class WorkerFunctionDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;
  workers: Worker[];
  functions: Function[];

  constructor(private _formBuilder: FormBuilder,
              private workerFunctionService: WorkerFunctionApiService,
              private workerService: WorkerApiService,
              private functionService: FunctionApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          functionId: '',
          workerId: ''
        })
      ])
    }),

    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
     }),

     this.functionService.getFunctions().subscribe(data => {
       this.functions = data;
      });
  }

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workerFunctions: WorkerFunction = {
    workerId: formArray[0].workerId,
    functionId: formArray[0].functionId
    }

    this.workerFunctionService.addWorkerFunction(workerFunctions).subscribe((data) => {
      this.router.navigate(['workerfunctions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
