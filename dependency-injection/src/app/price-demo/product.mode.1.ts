import { PriceDemoComponent } from './price-demo.component';

export class Product{
    service: PriceDemoComponent;
    basePrice: number;

    constructor(basePrice: number){
        this.service = new PriceDemoComponent();
        this.basePrice = basePrice;
    }

    totalPrice(state: string){
        return this.service.calculateTotalPrice(this.basePrice, state);
    }

}