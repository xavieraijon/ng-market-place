import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  longText: string = 'Detailed description of the product'

  constructor() { }

  ngOnInit(): void {
  }

}
