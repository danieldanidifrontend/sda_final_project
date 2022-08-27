import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductItemsComponent } from './product-items/product-items.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule
  ]
})
export class ShopModule { }
