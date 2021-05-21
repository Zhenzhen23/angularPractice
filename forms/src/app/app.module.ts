import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuWithBuilderComponent } from './form-sku-with-builder/form-sku-with-builder.component';
import { FormWithValidationsComponent } from './form-with-validations/form-with-validations.component';
import { FormWithCustomValidationComponent } from './form-with-custom-validation/form-with-custom-validation.component';
import { FormWithEventsComponent } from './form-with-events/form-with-events.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuWithBuilderComponent,
    FormWithValidationsComponent,
    FormWithCustomValidationComponent,
    FormWithEventsComponent,
    FormNgModelComponent,
    //DemoFormSkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
