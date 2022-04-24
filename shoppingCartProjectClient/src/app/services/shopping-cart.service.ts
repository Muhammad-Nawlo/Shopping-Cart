import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  constructor(public httpClient: HttpClient) {}

  httpAuthHeader(withAuth = false) {
    if (withAuth) {
      const token: any = localStorage.getItem('accessToken');
      const httpOptions: any = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        }),
      };
      return httpOptions;
    } else {
      return {};
    }
  }

  getOrCreateCart() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    this.httpClient
      .post(environment.cartUrl + 'add', {},this.httpAuthHeader(true))
      .subscribe((response: any) => {
        if (response.msg == 'ok') {
          localStorage.setItem('cartId', response.cartId);
          // return response.cartId;
        }
      });
      return localStorage.getItem('cartId');
      
  }

  getProductsInCart(){
    let cartId = this.getOrCreateCart();
    return this.httpClient.get(environment.cartUrl+'get-shopping-cart?cartId='+cartId,this.httpAuthHeader(true));
  }
  getTotalItem(){

  }

  addToCart(product:any,cartId:any){
   return this.httpClient.get(environment.cartUrl+ 'add-product-to-cart?cartId='+cartId+'&productId='+product.id,this.httpAuthHeader(true))
  }
  removeFromCart(product:any,cartId:any){
   return this.httpClient.get(environment.cartUrl+ 'remove-product-from-cart?cartId='+cartId+'&productId='+product.id,this.httpAuthHeader(true))
  }
}
