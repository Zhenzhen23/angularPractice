import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-with-custom-validation',
  templateUrl: './form-with-custom-validation.component.html',
  styleUrls: ['./form-with-custom-validation.component.css']
})
export class FormWithCustomValidationComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, this.skuValidator
      ])]
    });
  }

  ngOnInit(): void {
  }

  skuValidator(control: FormControl): {[s: string]: boolean} {
    if(!control.value.match(/^123/)){
      return {invalidSku: true};
    }
  }

}
