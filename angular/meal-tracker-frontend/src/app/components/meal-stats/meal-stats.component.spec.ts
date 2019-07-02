import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealStatsComponent } from './meal-stats.component';

describe('MealStatsComponent', () => {
  let component: MealStatsComponent;
  let fixture: ComponentFixture<MealStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
