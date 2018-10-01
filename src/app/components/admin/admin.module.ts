import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from './admin.component';
import { AdminStartComponent } from './admin-start/admin-start.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { ToastMessagesComponent } from './toast-messages/toast-messages.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminManageCategoriesComponent } from './admin-manage-categories/admin-manage-categories.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminStartComponent,
    AdminCategoriesComponent,
    AdminCategoryComponent,
    AdminManageCategoriesComponent,
    AdminProductsComponent,
    AdminProductComponent,
    ToastMessagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastModule,
    NgbModule,
    MatSortModule,
    BrowserAnimationsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {

}
