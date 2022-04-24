import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  form: FormGroup;
  categories: any[] = [];
  product: any = {};
  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      img: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let id: any = this.acRoute.snapshot.paramMap.get('id');
    if (id != 'new') {
      this.productsService.get(id).subscribe((response: any) => {
        if (response.msg == 'ok') {
          this.product = response.product;
          this.name.setValue(this.product.name);
          this.category.setValue(this.product.categoryId);
          this.price.setValue(this.product.price);
          this.img.setValue(this.product.img);
        }
      });
    }
    this.categoriesService.getAll().subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.categories = response.categories;
      }
    });
  }
  get name() {
    return this.form.controls['name'];
  }
  get price() {
    return this.form.controls['price'];
  }
  get category() {
    return this.form.controls['category'];
  }
  get img() {
    return this.form.controls['img'];
  }
  add() {
    let param: any = {
      name: this.name.value,
      price: this.price.value,
      categoryId: this.category.value,
      img: this.img.value,
    };
    if (this.product) {
      param['id'] = this.product.id;
    }
    this.productsService.add(param).subscribe((response: any) => {
      if (response.msg == 'ok') {
        this.router.navigate(['/admin-products']);
      }
    });
  }
  delete(product: any) {
    if (confirm('Are you sure to delete this product?'))
      this.productsService.delete(product.id).subscribe((response: any) => {
        if (response.msg == 'ok') {
          this.router.navigate(['/admin-products'])
        }
      });
  }
}
