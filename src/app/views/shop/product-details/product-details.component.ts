import { Component, Input, OnInit } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Product } from 'src/app/services/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  @Input() productList?: Product;

  
  constructor(public dialogRef: DialogRef, ) { 
    
  }

 

  ngOnInit(): void {
  }

}


