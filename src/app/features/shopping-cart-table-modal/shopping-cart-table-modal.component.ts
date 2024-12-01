import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ShoppingCartService } from '../services/shopping-cart.service';
import currency from 'currency.js';
@Component({
  selector: 'app-shopping-cart-table-modal',
  imports: [MatTableModule],
  templateUrl: './shopping-cart-table-modal.component.html',
  styleUrl: './shopping-cart-table-modal.component.css'
})
export class ShoppingCartTableModalComponent {
  displayedColumns: string[] = ['Producto', 'Precio', 'Cantidad', 'Subtotal'];

  shoppingCartService = inject(ShoppingCartService)
  datasource: any[] = []
  total = ''
  constructor() {
    const subTotalsItems: currency[] = [];

    this.datasource = this.shoppingCartService.getProducts()().map(transaction => {
      const transactionSubTotal = currency(transaction.price).multiply(transaction.quantity);
      subTotalsItems.push(transactionSubTotal);
      
      return { ...transaction, subtotal: transactionSubTotal.format() }
    })

    this.total = subTotalsItems.reduce((prev, curr) => prev.add(curr), currency(0)).format();
  }
}
