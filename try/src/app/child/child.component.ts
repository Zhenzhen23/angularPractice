import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childName: string
  @Output() childEvent = new EventEmitter<number>();

  onClicked(){
    this.childEvent.emit(50);
  }

  childAlert(){
    alert("this is child component!!!!")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
