import { TestBed, inject } from '@angular/core/testing';

import { SubCategoryPieChartOutService } from './sub-category-pie-chart-out.service';

describe('SubCategoryPieChartOutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoryPieChartOutService]
    });
  });

  it('should be created', inject([SubCategoryPieChartOutService], (service: SubCategoryPieChartOutService) => {
    expect(service).toBeTruthy();
  }));
});
