import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {

  @Input() productList?: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
