import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: any[] = [];
  deletedProduct = false;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.products = response.products;
      }
    });
  }
  delete(product: any) {
    if (confirm('Are you sure to delete this product?'))
      this.productsService.delete(product.id).subscribe((response: any) => {
        if (response.msg == 'ok') {
          this.deletedProduct = true;
          let index = this.products.indexOf(product);
          this.products.splice(index, 1);
        }
      });
  }
}
