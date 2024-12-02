import { Component } from '@angular/core';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { ProductsContainerComponent } from './features/products/products-container/products-container.component';
import { SliderComponent } from './features/slider/slider.component';

@Component({
  selector: 'app-root',
  imports: [ShoppingCartComponent, ProductsContainerComponent, SliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';
}
