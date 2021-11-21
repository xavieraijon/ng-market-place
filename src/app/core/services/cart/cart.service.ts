import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productList: Array<Product> = []
  productListCount: number = 0

  constructor() { }
  addProductToCart(product: Product) {
    const existProduct = this.productList.find(({name}) => {
      return name === product.name
    }) !== undefined

    if (existProduct) {
      this.productList.find(({count}) => {
        product.count += 1
      })
    } else {
      this.productList = [...this.productList, product]
      this.productList.find(({count}) => {
        product.count = 1
      })
      console.log("Added Product in cart", this.productList)
    }
  }
}
