import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle: string = 'Simple Angular Market Place'

  constructor(private cartService: CartService) { }

  getProductCount() {
    return this.cartService.productList.reduce((total, product) => {
      return (total += product.count )
    }, 0)
  }

  ngOnInit(): void {
  }

}
