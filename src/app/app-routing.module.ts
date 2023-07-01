import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Customer/login/login.component';
import { RegisterComponent } from './Components/Customer/register/register.component';
import { HomeComponent } from './Components/Customer/home/home.component';
import {OrderDetailComponent} from "./Components/Customer/order-detail/order-detail.component";
import {ProductDetailComponent} from "./Components/Customer/product-detail/product-detail.component";
import {ProductsComponent} from "./Components/Customer/products/products.component";
import {AdminHomeComponent} from "./Components/Admin/admin-home/admin-home.component";

const routes: Routes = [
  // { path: '**', redirectTo:'home' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent},
  { path: 'home', component: HomeComponent},
  { path: 'orders/:id', component: OrderDetailComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'adminHome', component: AdminHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
