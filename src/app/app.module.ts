import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './Servies/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Customer/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './Components/Customer/register/register.component';
import { HomeComponent } from './Components/Customer/home/home.component';
import { OrderDetailComponent } from './Components/Customer/order-detail/order-detail.component';
import { ProductDetailComponent } from './Components/Customer/product-detail/product-detail.component';
import { ProductsComponent } from './Components/Customer/products/products.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { AdminProductsComponent } from './Components/Admin/admin-products/admin-products.component';
import { AdminProductDetailComponent } from './Components/Admin/admin-product-detail/admin-product-detail.component';
import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { AddProductComponent } from './Components/Admin/add-product/add-product.component';
import { AdminOrderDetailComponent } from './Components/Admin/admin-order-detail/admin-order-detail.component';
import { CartComponent } from './Components/Customer/cart/cart.component';
import { UpdateComponent } from './Components/Customer/products/update/update.component';
import { WatchListComponent } from './Components/Customer/watch-list/watch-list.component';
import { NavComponent } from './Components/nav/nav.component';
import {AuthGuardService} from "./Servies/auth-guard.service";
import {UserGuardService} from "./Servies/user-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OrderDetailComponent,
    ProductDetailComponent,
    ProductsComponent,
    AdminHomeComponent,
    AdminProductsComponent,
    AdminProductDetailComponent,
    UpdateProductComponent,
    AddProductComponent,
    AdminOrderDetailComponent,
    CartComponent,
    UpdateComponent,
    WatchListComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    AuthGuardService,
    UserGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
