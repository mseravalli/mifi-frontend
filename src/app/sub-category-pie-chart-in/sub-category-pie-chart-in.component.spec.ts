import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryPieChartInComponent } from './sub-category-pie-chart-in.component';

describe('SubCategoryPieChartInComponent', () => {
  let component: SubCategoryPieChartInComponent;
  let fixture: ComponentFixture<SubCategoryPieChartInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryPieChartInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryPieChartInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
