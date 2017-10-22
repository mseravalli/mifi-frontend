import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPieChartInComponent } from './category-pie-chart-in.component';

describe('CategoryPieChartInComponent', () => {
  let component: CategoryPieChartInComponent;
  let fixture: ComponentFixture<CategoryPieChartInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPieChartInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPieChartInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
