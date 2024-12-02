import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  currentImageIndex = signal(0);
  images = [
    'https://m.media-amazon.com/images/I/71Jzezm8CBL.jpg',
    'https://mmbbookblog.com/wp-content/uploads/2022/12/game-of-thrones-books-in-order-1-e1670957688296.png',
    'https://i.harperapps.com/hcanz/covers/9780007448036/y648.jpg',
  ];

  handleNextImage() {
    if (this.currentImageIndex() === this.images.length - 1) {
      this.currentImageIndex.set(0);
    } else {
      this.currentImageIndex.set(this.currentImageIndex() + 1);
    }
  }

  handlePrevImage() {
    if (this.currentImageIndex() === 0) {
      this.currentImageIndex.set(this.images.length - 1);
    } else {
      this.currentImageIndex.set(this.currentImageIndex() - 1);
    }
  }
}
