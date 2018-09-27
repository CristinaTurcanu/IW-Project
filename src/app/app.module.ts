import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryListComponent } from './components/products/category-list/category-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { FormComponent } from './components/account/form/form.component';
import { ArrivalsComponent } from './components/home/arrivals/arrivals.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { TestimonialsComponent } from './components/home/testimonials/testimonials.component';
import { BestSellersComponent } from './components/home/best-sellers/best-sellers.component';
import { BlogComponent } from './components/home/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformationComponent } from './components/contact/information/information.component';
import { LocationComponent } from './components/contact/location/location.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminCategoriesComponent } from './components/admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminStartComponent } from './components/admin/admin-start/admin-start.component';
import { ProductsStartComponent } from './components/products/products-start/products-start.component';
import { AdminManageCategoriesComponent } from './components/admin/admin-manage-categories/admin-manage-categories.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';

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
    LocationComponent,
    SignInComponent,
    AdminComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminStartComponent,
    ProductsStartComponent,
    AdminManageCategoriesComponent,
    AdminProductComponent,
    AdminCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ToastModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
