import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryComboChartComponent } from './sub-category-combo-chart.component';

describe('SubCategoryComboChartComponent', () => {
  let component: SubCategoryComboChartComponent;
  let fixture: ComponentFixture<SubCategoryComboChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategoryComboChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategoryComboChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
