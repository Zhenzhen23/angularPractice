import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-a-component',
  templateUrl: './a-component.component.html',
  styleUrls: ['./a-component.component.css']
})
export class AComponentComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  onclick(str: string): void{
    this.eventBus.myArray.next(str);
  }

  ngOnInit(): void {
  }

}
