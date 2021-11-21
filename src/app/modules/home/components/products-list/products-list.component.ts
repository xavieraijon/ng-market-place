import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/Product';
import { ProductService } from 'src/app/core/services/product/product.service';
import { PRODUCTS } from 'src/app/data/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products)
  }

}
