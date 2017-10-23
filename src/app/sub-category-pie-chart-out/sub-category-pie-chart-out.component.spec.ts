import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryPieChartOutComponent } from './sub-category-pie-chart-out.component';

describe('SubCategoryPieChartOutComponent', () => {
  let component: SubCategoryPieChartOutComponent;
  let fixture: ComponentFixture<SubCategoryPieChartOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryPieChartOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryPieChartOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
