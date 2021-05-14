import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  
  template: `
  
  <div class="container" [ngSwitch] = test>
    <div *ngSwitchCase = "'A'">AAAA</div>
    <div *ngSwitchCase = "'B'">BBBB</div>
    <div *ngSwitchDefault> nononononnon</div>
  </div>
  
  <div [style.background-color] = "'yellow'">ss</div>
  <div [ngStyle]="{color: 'white', 'background-color': 'blue'}">sss</div>

  <div>
    <span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
    red text </span>
  </div>

  <div>===========================================</div>
  <div>===========================================</div>


  <h4 class="ui horizontal divider header"> ngStyle with object property from variable
  </h4>
  <div>
    <span [ngStyle]="{color: color}">
    {{ color }} text </span>
  </div>

  <h4 class="ui horizontal divider header"> style from variable
  </h4>
  <div [style.background-color]="color" style="color: white;">
  {{ color }} background </div>


  <div>===========================================</div>
  <div>===========================================</div>


  <div class="ui input">
    <input type="text" name="color" value="{{color}}" #colorinput>
  </div>
  <div class="ui input">
    <input type="text" name="fontSize" value="{{fontSize}}" #fontinput>
  </div>
  <button class="ui primary button" (click)="apply(colorinput.value, fontinput.value)"> Apply settings
  </button>


  <div>===========================================</div>
  <div>===========================================</div>

  <div [ngClass]="{bordered: false}">This is never bordered</div>
  <div [ngClass]="{bordered: true}">This is always bordered</div>

  <div [ngClass] = "{bordered: isBordered}">
    Using object literal. Border {{ isBordered ? "ON" : "OFF" }}
  </div>

  <div class="base" [ngClass]="classList">
    This is {{ classList.indexOf('blue') > -1 ? "" : "NOT" }} blue
    and {{ classList.indexOf('round') > -1 ? "" : "NOT" }} round
  </div>
 
  <div>===========================================</div>
  <div>===========================================</div>


  <h4 class = "ui horizontal divider header">
    Simple list of strings
  </h4>

  <div class = "ui list" *ngFor = "let c of cities; let num = index">
    <div class = "item"> {{ num + 1 }} - {{ c }}</div>
  </div> 

  <h4 class="ui horizontal divider header">
    List of objects
  </h4>

  <table class="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tr *ngFor="let p of people">
      <td>{{ p.name }}</td>
      <td>{{ p.age }}</td>
      <td>{{ p.city }}</td>
    </tr>
  </table>

  <div>===========================================</div>
  <div>===========================================</div>

  <h1 class="ui horizontal divider header">
    Nested data
  </h1>

  <div *ngFor="let item of peopleByCity">
    <h2 class="ui header">{{ item.city }}</h2>
    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tr *ngFor="let p of item.people">
        <td>{{ p.name }}</td>
        <td>{{ p.age }}</td>
      </tr>
    </table>
  </div>


  <div class='ngNonBindableDemo'>
    <span class="bordered">{{ content }}</span>
    <span class="pre" ngNonBindable>
      &larr; This is what {{ content }} rendered
    </span>
  </div>


  `,
  //templateUrl: './app.form.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  test = 'd';

  color = 'green';

  fontSize = 22;

  isBordered: boolean = true;

  classList: string[];
  
  apply(color: string, fontSize: number) { this.color = color;
    this.fontSize = fontSize;
  }

  cities = ['Miami', 'Sao Paulo', 'New York'];

  people = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' }, 
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' }
  ];

  peopleByCity = [
    {
      city: 'Miami',
      people: [
        { name: 'John', age: 12 },
        { name: 'Angel', age: 22 } 
      ]
    },
    {
      city: 'Sao Paulo',
      people: [
        { name: 'Anderson', age: 35 },
        { name: 'Felipe', age: 36 }
      ]
    }
  ];

  content: string = 'testtest';

// forms ==================================================================

ngOnInit(){
  this.classList = ['blue', 'round'];
}
   
     




}
