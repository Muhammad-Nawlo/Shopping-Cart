import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  categories: any[] = [];
  products: any[] = [];
  formatedProduct: any[] = [];
  category: any = -1;

  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private cartService: ShoppingCartService,
    private acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoriesService.getAll().subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.categories = response.categories;
      }
    });

    this.acRoute.queryParamMap.subscribe((param) => {
      this.category = param.get('category');
        this.cartService.getProductsInCart().subscribe((response: any) => {
          if (response.msg == 'ok') {
            this.products = this.formatedProduct = response.products;

            this.productsService.getAll().subscribe((response: any) => {
              if (response.msg == 'ok') {
                response.products.forEach((p: any) => {
                  let index = this.products.findIndex((cp) => {
                    return cp.id === p.id;
                  });
                  if (index == -1) {
                    p['quantity'] = 0;
                    this.products.push(p);
                  }
                });
                if (this.category) {
                  this.formatedProduct = this.products.filter((p) => {
                    return p.categoryId === this.category;
                  });
                } else {
                  this.formatedProduct = this.products;
                }
              }
            });
          }
        });
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
}
