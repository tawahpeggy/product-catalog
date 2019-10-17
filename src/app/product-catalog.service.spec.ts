import { TestBed } from '@angular/core/testing';

import { ProductCatalogService } from './product-catalog.service';

describe('ProductCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCatalogService = TestBed.get(ProductCatalogService);
    expect(service).toBeTruthy();
  });
});
