import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'try';

  name = 'wei';

  childName = 'notfriday';

  outputNum = 10;

  btnClick(event: any): void{
    console.log(event + '绑定事件')
  }

  parentClick(num: number){
    this.outputNum = num;

  }

  ngOnInit(): void {

    
  }


}
