import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FunctionApiService} from "../function-api.service";
import {Function} from "../function.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './function-details.component.html',
  styleUrls: ['./function-details.component.scss']
})
export class FunctionDetailsComponent implements OnInit {

  formGroup: FormGroup;
  formArray: any;

  constructor(private _formBuilder: FormBuilder, private functionService: FunctionApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          functionId: '',
          description: ''
        })
      ])
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
