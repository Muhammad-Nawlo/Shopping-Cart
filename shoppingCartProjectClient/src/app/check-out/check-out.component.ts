import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  products: any[] = [];
  totalItems = 0;
  totalPrice = 0;
  userId: number = -1;
  constructor(
    private cartService: ShoppingCartService,
    private usersService: UsersService,
    private ordersSerivce: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.usersService.getUser().id;
    this.cartService.getProductsInCart().subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.products = response.products;
        this.products = this.products.filter((p) => {
          return p.quantity > 0;
        });
        this.totalItems = 0;
        this.totalPrice = 0;
        this.products.forEach((p) => {
          this.totalItems += +p.quantity;
          this.totalPrice += +p.quantity * +p.price;
        });
      }
    });
  }
  add(data: any) {
    let products: any[] = [];
    this.products.forEach((p) => {
      products.push({ productId: p.id, quantity: p.quantity });
    });

    let params = {
      userId: this.userId,
      name: data.name,
      address: data.address,
      city: data.city,
      products:products
    };
    
    this.ordersSerivce.add(params).subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.deleteCart();
      }
    });
  }
  deleteCart() {
    localStorage.removeItem('cartId');
    this.router.navigate(['/order-success']);
  }
}
