import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FunctionApiService} from "../function-api.service";
import {Function} from "../function.model";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './function-edit.component.html',
  styleUrls: ['./function-edit.component.scss']
})
export class FunctionEditComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  functionId: string;
  description: string;
  function: Function;

  constructor(private _formBuilder: FormBuilder, private functionService: FunctionApiService,
              private router: Router,private activatedRoute: ActivatedRoute) {
  }

ngOnInit() {
  this.activatedRoute.paramMap.subscribe(params => {
    this.functionId = params.get('functionId');
    this.functionService.getFunction(this.functionId).subscribe(data => {
      this.function = data;

      this.formGroup = this._formBuilder.group({
        formArray: this._formBuilder.array([
          this._formBuilder.group({
            functionId: this.function.functionId,
            description: this.function.description,
          })
        ])
      });

    });
  });
}

  onSubmit() {
    let formArray = this.formGroup.get('formArray').value;
    let functions: Function = {
      functionId: formArray[0].functionId,
      description: formArray[0].description
    }
    this.functionService.addFunction(functions).subscribe((data) => {
      this.router.navigate(['functions']);
    }, (error => {
      console.log('error: ' + error);
    }));
  }
}
