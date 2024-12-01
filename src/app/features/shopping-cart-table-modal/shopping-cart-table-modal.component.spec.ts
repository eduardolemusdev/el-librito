import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTableModalComponent } from './shopping-cart-table-modal.component';

describe('ShoppingCartTableModalComponent', () => {
  let component: ShoppingCartTableModalComponent;
  let fixture: ComponentFixture<ShoppingCartTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartTableModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
