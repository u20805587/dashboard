import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {WorkerFunctionApiService} from "../workerFunction-api.service";
import {WorkerFunction} from "../workerFunction.model";
import {WorkerApiService} from "../../worker/worker-api.service";
import {Worker} from "../../worker/worker.model";
import {FunctionApiService} from "../../function/function-api.service";
import {Function} from "../../function/function.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './workerFunction-edit.component.html',
  styleUrls: ['./workerFunction-edit.component.scss']
})
export class WorkerFunctionEditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: any;

  workers: Worker[];
  functions: Function[];

  functionId: string;
  workerId: string;
  workerFunction: WorkerFunction;

  constructor(private _formBuilder: FormBuilder,
              private workerFunctionService: WorkerFunctionApiService,
              private workerService: WorkerApiService,
              private functionService: FunctionApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.workerId = params.get('workerId');
    this.functionId = params.get('functionId');
    this.workerFunctionService.getWorkerFunction(this.workerId,this.functionId).subscribe(data => {
      this.workerFunction = data;

    this.workerService.getWorkers().subscribe(data => {
      this.workers = data;
     }),

     this.functionService.getFunctions().subscribe(data => {
       this.functions = data;
      });

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            functionId: this.workerFunction.functionId,
            workerId: this.workerFunction.workerId,
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workerFunctions: WorkerFunction = {
      functionId: formArray[0].functionId,
      workerId: formArray[0].workerId
    }
    this.workerFunctionService.addWorkerFunction(workerFunctions).subscribe((data) => {
      this.router.navigate(['workerfunctions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
