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

  export interface Item {
    value: string;
  }

@Component({
  selector: 'app-details',
  templateUrl: './workerFunction-edit.component.html',
  styleUrls: ['./workerFunction-edit.component.scss']
})
export class WorkerFunctionEditComponent implements OnInit {
  formGroup: FormGroup;
  formArray: any;

  yesNo: Item[] = [
    {value: 'Y'},
    {value: 'N'}
  ];

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
      }),

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            workerId: this.workerId,
            functionId: this.functionId,
            insert: this.workerFunction.insert,
            modify: this.workerFunction.modify,
            delete: this.workerFunction.delete,
            view: this.workerFunction.view
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let workerFunctions: WorkerFunction = {
      workerId: formArray[0].workerId,
      functionId: formArray[0].functionId,
      insert: formArray[0].insert,
      modify: formArray[0].modify,
      delete: formArray[0].delete,
      view: formArray[0].view
    }
    this.workerFunctionService.addWorkerFunction(workerFunctions).subscribe((data) => {
      this.router.navigate(['workerfunctions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
