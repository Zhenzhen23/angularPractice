import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-ng-model',
  templateUrl: './form-ng-model.component.html',
  styleUrls: ['./form-ng-model.component.css']
})
export class FormNgModelComponent implements OnInit {

  myForm: FormGroup;
  productName: string;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
