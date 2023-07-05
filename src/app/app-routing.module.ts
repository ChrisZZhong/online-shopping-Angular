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
import {CartComponent} from "./Components/Customer/cart/cart.component";
import {WatchListComponent} from "./Components/Customer/watch-list/watch-list.component";
import {AuthGuardService} from "./Servies/auth-guard.service";
import {UserGuardService} from "./Servies/user-guard.service";

const routes: Routes = [
  // { path: '**', redirectTo:'login' },
  { path: '', redirectTo:'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent},
  // user routes
  { path: 'home', component: HomeComponent, canActivate: [UserGuardService]},
  { path: 'orders/:id', component: OrderDetailComponent, canActivate: [UserGuardService]},
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [UserGuardService]},
  { path: 'products', component: ProductsComponent, canActivate: [UserGuardService]},
  { path: 'cart', component: CartComponent, canActivate: [UserGuardService]},
  { path: 'watchlist', component: WatchListComponent, canActivate: [UserGuardService]},
  // admin routes
  { path: 'adminHome', component: AdminHomeComponent, canActivate: [AuthGuardService]},
  { path: 'adminProducts', component: AdminProductsComponent, canActivate: [AuthGuardService]},
  { path: 'adminProduct/:id', component: AdminProductDetailComponent, canActivate: [AuthGuardService]},
  { path: 'updateProduct/:id', component: UpdateProductComponent, canActivate: [AuthGuardService]},
  { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuardService]},
  { path: 'adminOrders/:id', component: AdminOrderDetailComponent, canActivate: [AuthGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
