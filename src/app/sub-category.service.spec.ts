import { TestBed, inject } from '@angular/core/testing';

import { SubCategoryService } from './sub-category.service';

describe('SubCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubCategoryService]
    });
  });

  it('should be created', inject([SubCategoryService], (service: SubCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
