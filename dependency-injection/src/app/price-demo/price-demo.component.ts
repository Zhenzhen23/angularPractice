import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-demo',
  templateUrl: './price-demo.component.html',
  styleUrls: ['./price-demo.component.css']
})
export class PriceDemoComponent implements OnInit {

  constructor() { }

  calculateTotalPrice(basePrice: number, state: string){
    const tax = Math.random();
    return basePrice + tax;
  }




  ngOnInit(): void {
  }

}
