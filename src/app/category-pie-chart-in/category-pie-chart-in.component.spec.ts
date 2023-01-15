import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { CategoryPieChartInComponent } from "./category-pie-chart-in.component";

describe("CategoryPieChartInComponent", () => {
  let component: CategoryPieChartInComponent;
  let fixture: ComponentFixture<CategoryPieChartInComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPieChartInComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPieChartInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
