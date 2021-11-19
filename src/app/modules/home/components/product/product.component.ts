import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/Product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product)
  }

}
