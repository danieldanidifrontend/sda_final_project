import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

    public getProducts() {

      return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(shareReplay());
    }
  }

