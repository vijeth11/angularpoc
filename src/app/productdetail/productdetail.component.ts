import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../products/products.component';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  pageTitle : string = 'Product Detail';
  product:Iproduct;
  constructor() { }

  ngOnInit() {
  }

}
