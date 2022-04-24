import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  products: any[] = [];
  constructor(private cartService: ShoppingCartService,private router:Router) {}
  totalItems = 0;
  totalPrice = 0;
  ngOnInit(): void {
    this.cartService.getProductsInCart().subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.products = response.products;
        this.products = this.products.filter((p) => {
          return p.quantity > 0;
        });
        this.totalItems=0;
        this.totalPrice=0;
        this.products.forEach((p) => {
          this.totalItems += +p.quantity;
          this.totalPrice += +p.quantity*+p.price
        });
      }
    });

  }

  addToCart(product: any) {
    let cartId = this.cartService.getOrCreateCart();
    this.cartService.addToCart(product, cartId).subscribe((response: any) => {
      this.ngOnInit();
    });
  }
  removeFromCart(product: any) {
    let cartId = this.cartService.getOrCreateCart();
    this.cartService
      .removeFromCart(product, cartId)
      .subscribe((response: any) => {
        this.ngOnInit();
      });
  }
  deleteCart() {
    localStorage.removeItem('cartId');
    this.router.navigate(['/']);
  }
}
