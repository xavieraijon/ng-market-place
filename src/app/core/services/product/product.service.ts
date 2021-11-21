import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from 'src/app/data/products';
import { Product } from '../../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS)
    return products
  }
}
