import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Customer/login/login.component';
import { RegisterComponent } from './Components/Customer/register/register.component';
import { HomeComponent } from './Components/Customer/home/home.component';
import {OrderDetailComponent} from "./Components/Customer/order-detail/order-detail.component";
import {ProductDetailComponent} from "./Components/Customer/product-detail/product-detail.component";
import {ProductsComponent} from "./Components/Customer/products/products.component";
import {AdminHomeComponent} from "./Components/Admin/admin-home/admin-home.component";
import {AdminProductsComponent} from "./Components/Admin/admin-products/admin-products.component";
import {AdminProductDetailComponent} from "./Components/Admin/admin-product-detail/admin-product-detail.component";
import {UpdateProductComponent} from "./Components/Admin/update-product/update-product.component";
import {AddProductComponent} from "./Components/Admin/add-product/add-product.component";
import {AdminOrderDetailComponent} from "./Components/Admin/admin-order-detail/admin-order-detail.component";

const routes: Routes = [
  // { path: '**', redirectTo:'home' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'orders/:id', component: OrderDetailComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'adminHome', component: AdminHomeComponent},
  { path: 'adminProducts', component: AdminProductsComponent},
  { path: 'adminProduct/:id', component: AdminProductDetailComponent},
  { path: 'updateProduct/:id', component: UpdateProductComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'adminOrders/:id', component: AdminOrderDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
