import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import currency from 'currency.js';
import { ProductStore } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private products: WritableSignal<ProductStore[]> = signal([]);
  private balance: WritableSignal<currency> = signal(currency(0));

  constructor() {}

  public getProducts(): Signal<ProductStore[]> {
    return this.products;
  }

  public getPodructById(id: string): ProductStore | undefined {
    return this.products().find((product) => product.id === id);
  }

  public addProduct(product: ProductStore): void {
    const transaction = this.balance().add(product.price);
    this.balance.set(transaction);
    this.products.set([...this.products(), product]);
  }
  public getCurrencyBalance(): WritableSignal<currency> {
    return this.balance;
  }

  public cleanShoppingCart() {
    this.products.set([]);
  }
}
