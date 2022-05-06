import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightCalcComponent } from './weight-calc.component';

describe('WeightCalcComponent', () => {
  let component: WeightCalcComponent;
  let fixture: ComponentFixture<WeightCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
