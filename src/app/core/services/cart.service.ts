import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList!: Array<Product>

  constructor() { }

  addProductToCart(product: Product) {
    console.log(product)
    const existProduct = this.productList.find(({ name }) => {
      return name === product.name
    })

    console.log(existProduct)
  }
}
