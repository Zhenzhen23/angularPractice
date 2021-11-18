import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'app-b-component',
  templateUrl: './b-component.component.html',
  styleUrls: ['./b-component.component.css']
})
export class BComponentComponent implements OnInit {

  constructor(private eventBus: EventBusService) { }

  events: Array<string> = new Array<string>();

  ngOnInit(): void {
    this.listEvents();
  }

  listEvents(): void {
    this.eventBus.myArray.subscribe( value => {
      this.events.push(value);
    })
  }

}
