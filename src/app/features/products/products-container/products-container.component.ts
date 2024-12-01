import { Component, Signal, WritableSignal, inject, signal } from '@angular/core';
import { books } from '../../services/data';
import { ProductCardComponent } from "../product-card/product-card.component";
import { ProductStore } from '../../models/product';
import { SearchProductsComponent } from '../search-products/search-products.component';
import { SearchBookService } from '../../services/search-book.service';

@Component({
  selector: 'app-products-container',
  imports: [ProductCardComponent, SearchProductsComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css'
})
export class ProductsContainerComponent {
  products: WritableSignal<ProductStore[]> =  signal(books);
  searchBookService = inject(SearchBookService);

  handleCategorySearch(data:any){
   const result = this.searchBookService.getBooksByCategory(data);
   this.products.set(result);
  }

  handleTitleSearch(data:any){
    const result = this.searchBookService.getBooksByTitle(data);
    this.products.set(result);
   }
}
