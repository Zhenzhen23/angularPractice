import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';
import { EventBusService } from './event-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    AComponentComponent,
    BComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    EventBusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
