import { Component, WritableSignal, inject, signal } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import currency from 'currency.js';
import { Dialog } from '@angular/cdk/dialog';
import { ShoppingCartTableModalComponent } from '../shopping-cart-table-modal/shopping-cart-table-modal.component';

@Component({
  selector: 'app-shopping-cart',
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  currencyBalance:WritableSignal<currency> = signal(currency(0));
  dialogService = inject(Dialog);
  
  constructor(private shoppingCartService: ShoppingCartService){
    this.currencyBalance = this.shoppingCartService.getCurrencyBalance()
  }

  showShoppingCart(){
    this.dialogService.closeAll();
    this.dialogService.open(ShoppingCartTableModalComponent, {
      width: '80vw',         
      height: '80vh',        
    });
  }
}
