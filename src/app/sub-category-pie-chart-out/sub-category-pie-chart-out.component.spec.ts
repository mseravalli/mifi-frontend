import { ComponentFixture, TestBed, waitForAsync as  } from '@angular/core/testing';

import { SubCategoryPieChartOutComponent } from './sub-category-pie-chart-out.component';

describe('SubCategoryPieChartOutComponent', () => {
  let component: SubCategoryPieChartOutComponent;
  let fixture: ComponentFixture<SubCategoryPieChartOutComponent>;

  beforeEach(waitForAsync(() => {
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
