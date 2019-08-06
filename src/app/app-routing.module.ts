import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPagesComponent } from './views/admin/admin-pages.component';
import { WordpressHostingComponent } from './views/shop/wordpress-hosting/wordpress-hosting.component';
import { VenebanksComponent } from './views/shop/venebanks/venebanks.component';
import { ContactusComponent } from './views/shop/contactus/contactus.component';
import { CreateProductComponent } from './features/products/create-product/create-product.component';
import { ShopHomeComponent } from './views/homes/shop-home/shop-home.component';
import { AuthComponent } from './views/auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/portada', pathMatch: 'full'},
  {path: 'portada', component: ShopHomeComponent},
  {path: 'wordpress-hosting', component: WordpressHostingComponent},
  {path: 'bancos', component: VenebanksComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'adminProduct', component: CreateProductComponent},
  {path: 'admin', component: AdminPagesComponent},
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
