import { Component, OnInit } from '@angular/core';

export interface Iproduct{
  "productId": number,
      "productName": string,
      "productCode": string,
      "releaseDate": string,
      "description": string,
      "price": number,
      "starRating": number,
      "imageUrl": string
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Title:String = "Product List"
  imageWidth: number=50;
  imageMargin: number =2;
  showImage: boolean = false;
  _listFilter: string;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter? this.performFilter(this.listFilter):this.products;
  }
  filteredProducts:Iproduct[];
  products: Iproduct[] =[
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  ] ;
  constructor() {
    this.filteredProducts=this.products;
    this._listFilter="cart";
   }

  ngOnInit() {
  }
  
  toggleImage():void {
    this.showImage=!this.showImage;
  }
  performFilter(filterBy: string):Iproduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }
}
