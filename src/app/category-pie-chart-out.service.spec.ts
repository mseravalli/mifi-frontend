import { TestBed, inject } from '@angular/core/testing';

import { CategoryPieChartOutService } from './category-pie-chart-out.service';

describe('CategoryPieChartOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryPieChartOutService]
    });
  });

  it('should be created', inject([CategoryPieChartOutService], (service: CategoryPieChartOutService) => {
    expect(service).toBeTruthy();
  }));
});
