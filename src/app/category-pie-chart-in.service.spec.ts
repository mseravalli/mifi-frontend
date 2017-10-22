import { TestBed, inject } from '@angular/core/testing';

import { CategoryPieChartInService } from './category-pie-chart-in.service';

describe('CategoryPieChartInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryPieChartInService]
    });
  });

  it('should be created', inject([CategoryPieChartInService], (service: CategoryPieChartInService) => {
    expect(service).toBeTruthy();
  }));
});
