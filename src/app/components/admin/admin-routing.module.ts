import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminManageCategoriesComponent } from './admin-manage-categories/admin-manage-categories.component';


const adminRoutes: Routes = [
  { path : 'admin', component: AdminComponent, children: [
    { path : '', component: AdminStartComponent},
    { path : 'categories', component: AdminManageCategoriesComponent},
    { path : 'categories/new', component: AdminCategoryComponent},
    { path : ':cid/edit', component: AdminCategoryComponent},
    { path : ':cid/new', component: AdminProductComponent},
    { path : ':cid/:fid/edit', component: AdminProductComponent},
    { path : ':cid', component: AdminProductsComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
