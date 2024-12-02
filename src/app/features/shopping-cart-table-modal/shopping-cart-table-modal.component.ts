import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ShoppingCartService } from '../services/shopping-cart.service';
import currency from 'currency.js';
import { Dialog } from '@angular/cdk/dialog';
import { ProductFeedbackComponent } from '../products/product-feedback/product-feedback.component';
@Component({
  selector: 'app-shopping-cart-table-modal',
  imports: [MatTableModule],
  templateUrl: './shopping-cart-table-modal.component.html',
  styleUrl: './shopping-cart-table-modal.component.css',
})
export class ShoppingCartTableModalComponent {
  displayedColumns: string[] = ['Producto', 'Precio', 'Cantidad', 'Subtotal'];

  shoppingCartService = inject(ShoppingCartService);
  datasource: any[] = [];
  total = '';
  dialogService = inject(Dialog);

  constructor() {
    const subTotalsItems: currency[] = [];

    this.datasource = this.shoppingCartService
      .getProducts()()
      .map((transaction) => {
        const transactionSubTotal = currency(transaction.price).multiply(
          transaction.quantity
        );
        subTotalsItems.push(transactionSubTotal);

        return { ...transaction, subtotal: transactionSubTotal.format() };
      });

    this.total = subTotalsItems
      .reduce((prev, curr) => prev.add(curr), currency(0))
      .format();
  }

  closeShoppingCart() {
    this.dialogService.closeAll();
  }

  handlePayment() {
    if (this.total != '$0.00') {
      this.shoppingCartService.cleanShoppingCart();
      this.datasource = [];
      this.total = currency(0).format();
      this.dialogService.open(ProductFeedbackComponent, {
        maxWidth: '60vw',
        maxHeight: '60vh',
        data: 'Pago realizado exitosamente!',
      });
    }
  }
}
