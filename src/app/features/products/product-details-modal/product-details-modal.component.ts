import { DIALOG_DATA, Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { ProductStore } from '../../models/product';
import { ProductStarsComponent } from '../product-stars/product-stars.component';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductFeedbackComponent } from '../product-feedback/product-feedback.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-details-modal',
  imports: [
    ProductStarsComponent,
    MatButtonModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './product-details-modal.component.html',
  styleUrl: './product-details-modal.component.css',
})
export class ProductDetailsModalComponent {
  data = inject<ProductStore>(DIALOG_DATA);
  shoppingCartService = inject(ShoppingCartService);
  dialogService = inject(Dialog);
  constructor() {
    console.log(this.data);
  }

  addProductsToCart() {
    this.data.quantity = this.booksQuantity;
    this.shoppingCartService.addProduct(this.data);
    this.dialogService.closeAll();

    this.dialogService.open(ProductFeedbackComponent, {
      maxWidth: '60vw',
      maxHeight: '60vh',
      data: 'Producto agregado al carrito exitosamente!',
    });
  }

  booksQuantity: number = 1;

  increase(): void {
    this.booksQuantity++;
  }

  decrease(): void {
    if (this.booksQuantity > 1) {
      this.booksQuantity--;
    }
  }
}
