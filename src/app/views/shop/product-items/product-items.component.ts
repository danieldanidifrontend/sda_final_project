import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {

  @Input() productList?: Product;

  constructor(public dialog: Dialog) { }

  openDialog() : void {
    this.dialog.open<string>(ProductDetailsComponent)
  }

  ngOnInit(): void {

  }

}
