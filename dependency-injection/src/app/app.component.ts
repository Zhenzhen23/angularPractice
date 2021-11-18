import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dependency-injection';

  num: number = 1;


  number1(){
    this.num--;
  }

  number2(){
    this.num++;
  }

}
