import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject, Inject, input, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-feedback',
  imports: [],
  templateUrl: './product-feedback.component.html',
  styleUrl: './product-feedback.component.css',
})
export class ProductFeedbackComponent {
  dialogData = inject(DIALOG_DATA);

  modalMessage = signal('');
  constructor() {
    this.modalMessage.set(this.dialogData);
  }
}
