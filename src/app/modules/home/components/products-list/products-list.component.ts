import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/Product';
import { PRODUCTS } from 'src/app/data/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = PRODUCTS

  constructor() { }

  ngOnInit(): void {
  }

}
