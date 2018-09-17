
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { CategoryListComponent } from './products/category-list/category-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AccountComponent } from './account/account.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FormComponent } from './account/form/form.component';
import { ArrivalsComponent } from './home/arrivals/arrivals.component';
import { SliderComponent } from './home/slider/slider.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { BestSellersComponent } from './home/best-sellers/best-sellers.component';
import { BlogComponent } from './home/blog/blog.component';
import { FooterComponent } from './/footer/footer.component';
import { InformationComponent } from './contact/information/information.component';
import { LocationComponent } from './contact/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CategoryListComponent,
    ContactComponent,
    HomeComponent,
    ShoppingCartComponent,
    WishlistComponent,
    AccountComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    FormComponent,
    ArrivalsComponent,
    SliderComponent,
    TestimonialsComponent,
    BestSellersComponent,
    BlogComponent,
    FooterComponent,
    InformationComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    Ng2CarouselamosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
