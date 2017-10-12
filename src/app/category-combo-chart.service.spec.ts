import { TestBed, inject } from '@angular/core/testing';

import { CategoryComboChartService } from './category-combo-chart.service';

describe('CategoryComboChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryComboChartService]
    });
  });

  it('should be created', inject([CategoryComboChartService], (service: CategoryComboChartService) => {
    expect(service).toBeTruthy();
  }));
});
