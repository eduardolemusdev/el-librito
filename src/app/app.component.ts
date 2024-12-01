import { Component, input } from '@angular/core';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { ProductsContainerComponent } from "./features/products/products-container/products-container.component";

@Component({
  selector: 'app-root',
  imports: [ ShoppingCartComponent, ProductsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
