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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
