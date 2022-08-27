import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']


})
export class ShopComponent implements OnInit {

  productItems = [];
  public wynik;
  

  constructor(private productService:ProductService ) {
  

    this.wynik = this.productService.getProducts();
  }

  ngOnInit(): void {
    
  }

}
