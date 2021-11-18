import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()

export class EventBusService{

    myArray: Subject<string> = new Subject<string>();

    constructor(){};
}