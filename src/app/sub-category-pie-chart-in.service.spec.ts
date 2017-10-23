import { TestBed, inject } from '@angular/core/testing';

import { SubCategoryPieChartInService } from './sub-category-pie-chart-in.service';

describe('SubCategoryPieChartInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoryPieChartInService]
    });
  });

  it('should be created', inject([SubCategoryPieChartInService], (service: SubCategoryPieChartInService) => {
    expect(service).toBeTruthy();
  }));
});
