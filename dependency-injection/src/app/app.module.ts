import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PriceDemoComponent } from './price-demo/price-demo.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';

import { UserDemoModule } from './user-demo/user-demo.module';
import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    PriceDemoComponent,
    UserDemoComponent,
    UserDemoInjectorComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    UserDemoModule,
    AnalyticsDemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
