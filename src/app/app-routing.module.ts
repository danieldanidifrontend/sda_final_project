import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', loadChildren: () => import('./views/home/home.module')
  .then(m => m.HomeModule) }, 
{ path: 'shop', loadChildren: () => import('./views/shop/shop.module')
  .then(m => m.ShopModule) }, 
{ path: 'cart', loadChildren: () => import('./views/cart/cart.module')
.then(m => m.CartModule) } ,
{ path: 'login', loadChildren: () => import('./views/login/login.module')
  .then(m => m.LoginModule) },
]; 
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
