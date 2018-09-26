import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccountComponent } from './components/account/account.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductsStartComponent } from './components/products/products-start/products-start.component';
import { AdminStartComponent } from './components/admin/admin-start/admin-start.component';
import { AdminManageCategoriesComponent } from './components/admin/admin-manage-categories/admin-manage-categories.component';
import { AdminProductComponent } from './components/admin/admin-product/admin-product.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';

const appRoutes: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'home', component: HomeComponent },
  { path : 'products', component: ProductsComponent, children: [
    { path : '', component: ProductsStartComponent},
    { path : ':cid', component: ProductsListComponent},
    { path : ':cid/:fid', component: ProductDetailsComponent}
  ]},
  { path : 'contact', component: ContactComponent },
  { path : 'account', component: AccountComponent },
  { path : 'signIn', component: SignInComponent },
  { path : 'admin', component: AdminComponent, children: [
    { path : '', component: AdminStartComponent},
    { path : 'categories', component: AdminManageCategoriesComponent},
    { path : 'categories/new', component: AdminCategoryComponent},
    { path : ':cid/edit', component: AdminCategoryComponent},
    { path : ':cid/new', component: AdminProductComponent},
    { path : ':cid/:fid/edit', component: AdminProductComponent},
    { path : ':cid', component: AdminProductsComponent}
  ]},
  { path : 'wishlist', component: WishlistComponent },
  { path : 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
