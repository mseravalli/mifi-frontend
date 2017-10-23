import { TestBed, inject } from '@angular/core/testing';

import { SubCategoryComboChartService } from './sub-category-combo-chart.service';

describe('SubCategoryComboChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoryComboChartService]
    });
  });

  it('should be created', inject([SubCategoryComboChartService], (service: SubCategoryComboChartService) => {
    expect(service).toBeTruthy();
  }));
});
