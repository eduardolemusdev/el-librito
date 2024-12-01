import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-product-stars',
  imports: [],
  templateUrl: './product-stars.component.html',
  styleUrl: './product-stars.component.css'
})
export class ProductStarsComponent {
  starsActive = input.required<number>();
  disableStars = computed(() => 5-this.starsActive());
}
