import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/services/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']


})
export class ShopComponent implements OnInit {

  productItems$: Observable<Product[]>
  
  

  constructor(private productService:ProductService ) {
  

    this.productItems$ = this.productService.getProducts();
  }

  ngOnInit(): void {
    
  }

}
