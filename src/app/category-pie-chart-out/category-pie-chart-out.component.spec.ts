import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryPieChartOutComponent } from './category-pie-chart-out.component';

describe('CategoryPieChartOutComponent', () => {
  let component: CategoryPieChartOutComponent;
  let fixture: ComponentFixture<CategoryPieChartOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryPieChartOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPieChartOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
