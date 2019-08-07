import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { BackendService } from './services/backend.service';

import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './store/app-store.module';
import { AppComponent } from './app.component';
import { CustommaterialModule } from './utilities/custommaterial.module';

import { AdminPagesComponent } from './views/admin/admin-pages.component';
import { AboutusComponent } from './views/shop/aboutus/aboutus.component';
import { ContactusComponent } from './views/shop/contactus/contactus.component';
import { CheckoutComponent } from './views/shop/checkout/checkout.component';
import { AdminFooterComponent } from './views/footers/admin-footer/admin-footer.component';
import { AdminHeaderComponent } from './views/headers/admin-header/admin-header.component';
import { ShopHeaderComponent } from './views/headers/shop-header/shop-header.component';
import { AdminHomeComponent } from './views/homes/admin-home/admin-home.component';
import { ShopHomeComponent } from './views/homes/shop-home/shop-home.component';
import { AdminNavbarComponent } from './views/navbars/admin-navbar/admin-navbar.component';
import { ShopNavbarComponent } from './views/navbars/shop-navbar/shop-navbar.component';
import { AdminOrderComponent } from './views/orders/admin-order/admin-order.component';
import { ShopOrderComponent } from './views/orders/shop-order/shop-order.component';
import { CreateProductComponent } from './features/products/create-product/create-product.component';
import { VenebanksComponent } from './views/shop/venebanks/venebanks.component';
import { WordpressHostingComponent } from './views/shop/wordpress-hosting/wordpress-hosting.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthComponent } from './views/auth/auth.component';
import { ShopFooterComponent } from './views/footers/shop-footer/shop-footer.component';
import { AdminProductComponent } from './views/products/admin-product/admin-product.component';
import { ShopProductComponent } from './views/products/shop-product/shop-product.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    AppComponent,
    AdminPagesComponent,
    AboutusComponent,    
    ContactusComponent,
    CheckoutComponent,    
    CreateProductComponent,   
    VenebanksComponent,    
    WordpressHostingComponent,    
    AdminFooterComponent,    
    AdminHeaderComponent,    
    ShopHeaderComponent,    
    AdminHomeComponent,    
    ShopHomeComponent,    
    AdminNavbarComponent,    
    ShopNavbarComponent,    
    AdminOrderComponent,    
    ShopOrderComponent, 
    AuthComponent,
    ShopFooterComponent,
    ShopHeaderComponent,
    AdminProductComponent,
    ShopProductComponent
  ],
  imports: [
    AppRoutingModule,
    AppStoreModule,
    BrowserModule,    
    //BrowserAnimationsModule,
    NoopAnimationsModule,
    CustommaterialModule,
    FormsModule,
    HttpClientModule,    
    ReactiveFormsModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    AuthService,
    ApiService,
    BackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
