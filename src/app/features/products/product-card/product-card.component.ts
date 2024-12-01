import { Component, inject, input } from '@angular/core';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { ProductStore } from '../../models/product';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<ProductStore>();
  dialogService = inject(Dialog);

  watchDetailsDialog(){
    this.dialogService.open(ProductDetailsModalComponent, {
      data: this.product(),
      maxWidth: '80vw',
    });
  }
}
