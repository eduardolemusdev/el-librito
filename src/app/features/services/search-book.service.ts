import { Injectable } from '@angular/core';
import { books } from './data';
import { ProductStore } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SearchBookService {

  constructor() { }

  getBooksByCategory(category:string):ProductStore[]{
    return books.filter(b => b.category === category)
  }

  getBooksByTitle(title:string){
    return books.filter(b => b.name.toLowerCase().includes(title.toLowerCase()))
  }
}
