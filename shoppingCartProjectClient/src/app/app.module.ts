import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { DataTableModule } from 'ornamentum';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { UsersService } from './services/users.service';
import { AuthGuard as AuthGuard } from './services/auth-guard.service';
import { AdminGuard } from './services/admin-guard.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { CategoriesFormComponent } from './admin/categories-form/categories-form.component';
import { ProductsFormComponent } from './admin/products-form/products-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyOrdersComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SignupComponent,
    NoAccessComponent,
    AdminCategoriesComponent,
    CategoriesFormComponent,
    ProductsFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('accessToken');
        },
      },
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'no-access',
        component: NoAccessComponent,
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'check-out',
        component: CheckOutComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'admin-products',
        component: AdminProductsComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'admin-orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'admin-categories',
        component: AdminCategoriesComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'admin-products/:id',
        component: ProductsFormComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'admin-products/new',
        component: ProductsFormComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'admin-categories/:id',
        component: CategoriesFormComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'admin-categories/new',
        component: CategoriesFormComponent,
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: '**',
        component: HomeComponent,
      },
    ]),
    DataTableModule.forRoot()
  ],
  providers: [UsersService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
