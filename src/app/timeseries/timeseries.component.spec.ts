import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { TimeseriesComponent } from "./timeseries.component";

describe("TimeseriesComponent", () => {
  let component: TimeseriesComponent;
  let fixture: ComponentFixture<TimeseriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TimeseriesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });
});
