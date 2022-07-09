import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { CategoryComboChartComponent } from './category-combo-chart.component';

describe('CategoryComboChartComponent', () => {
  let component: CategoryComboChartComponent;
  let fixture: ComponentFixture<CategoryComboChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryComboChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComboChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
