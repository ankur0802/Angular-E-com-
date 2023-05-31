import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'seller-auth',
    component: SellerAuthComponent,
  },
  {
    path:'seller-home',
    canActivate:[authGuard],
    component: SellerHomeComponent,
  },
  {
    path:'seller-add-product',
    canActivate:[authGuard],
    component: SellerAddProductComponent
  }
  ,
  {
    path:'seller-update-product/:id',
    canActivate:[authGuard],
    component: SellerUpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
