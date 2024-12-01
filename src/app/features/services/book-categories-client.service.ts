import { Injectable } from '@angular/core';
import { books } from './data';

@Injectable({
  providedIn: 'root'
})
export class BookCategoriesClientService {

  constructor() { }

  getCategories():string[]{
    return Array.from(new Set(books.map(book => book.category)).values());
  }
}
