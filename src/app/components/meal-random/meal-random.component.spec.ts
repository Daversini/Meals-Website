import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealRandomComponent } from './meal-random.component';

describe('MealRandomComponent', () => {
  let component: MealRandomComponent;
  let fixture: ComponentFixture<MealRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealRandomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
