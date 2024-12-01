import { Component, inject, output } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BookCategoriesClientService } from '../../services/book-categories-client.service';

@Component({
  selector: 'app-search-products',
  imports: [ReactiveFormsModule,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css'
})
export class SearchProductsComponent {

  bookCategories:string[] = []
  categoriesService = inject(BookCategoriesClientService);
  searchBookForm = new FormGroup({
    category: new FormControl('', Validators.required), // Campo de categoría
    title: new FormControl('', Validators.required) // Campo de título
  });

  categorySelected = output<string>();
  titleSearched = output<string>();

  constructor(){
    this.bookCategories = this.categoriesService.getCategories();
  }

  onCategoryChange(){
    this.categorySelected.emit(this.searchBookForm.controls.category.value || '')
  }

  onTitleSearched(){
    this.titleSearched.emit(this.searchBookForm.controls.title.value || '')
  }
  

}
