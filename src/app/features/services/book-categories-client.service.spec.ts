import { TestBed } from '@angular/core/testing';

import { BookCategoriesClientService } from './book-categories-client.service';

describe('BookCategoriesClientService', () => {
  let service: BookCategoriesClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookCategoriesClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
