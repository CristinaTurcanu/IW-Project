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
import { AdminProductEditComponent } from './components/admin/admin-product-edit/admin-product-edit.component';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { ProductsStartComponent } from './components/products/products-start/products-start.component';
import { AdminStartComponent } from './components/admin/admin-start/admin-start.component';
import { AdminCreateCategoryComponent } from './components/admin/admin-create-category/admin-create-category.component';
import { AdminCreateProductComponent } from './components/admin/admin-create-product/admin-create-product.component';
import { AdminManageCategoriesComponent } from './components/admin/admin-manage-categories/admin-manage-categories.component';
import { AdminCategoryEditComponent } from './components/admin/admin-category-edit/admin-category-edit.component';

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
    { path : 'categories', component: AdminManageCategoriesComponent},
    { path : 'categories/new', component: AdminCreateCategoryComponent},
    { path : ':cid/edit', component: AdminCategoryEditComponent},
    { path : '', component: AdminStartComponent},
    { path : ':cid/new', component: AdminCreateProductComponent},
    { path : ':cid', component: AdminProductsComponent},
    { path : ':cid/:fid/edit', component: AdminProductEditComponent},
  ]},
  { path : 'wishlist', component: WishlistComponent },
  { path : 'shopping-cart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
