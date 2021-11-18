import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDemoComponent } from './price-demo.component';

describe('PriceDemoComponent', () => {
  let component: PriceDemoComponent;
  let fixture: ComponentFixture<PriceDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
