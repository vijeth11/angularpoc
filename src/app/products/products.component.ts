import { Component, OnInit, AfterViewChecked ,Output, EventEmitter } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

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
  @Output() loggedin:EventEmitter<boolean>=new EventEmitter<boolean>();
  Title:String = "Product List"
  imageWidth: number=50;
  imageMargin: number =2;
  showImage: boolean = false;
  _listFilter: string;
  logedin: any;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.listFilter? this.performFilter(this.listFilter):this.products;
  }
  filteredProducts:Iproduct[];
  products: Iproduct[] =[] ;
  
  constructor(private ProductService:ProductlistService,private route:Router) {
    
   }

  ngOnInit() {
    WelcomeComponent.isAuthenticated=this.ProductService.isAuthenticated();
    console.log(WelcomeComponent.isAuthenticated);
    this.ProductService.getProduct().subscribe((data)=>{
      this.products=data;
      this.filteredProducts=this.products;
    });
  }
  
  change(){
    console.log("trying in");

    this.loggedin.emit(true);
  }
  
  toggleImage():void {
    this.showImage=!this.showImage;
  }
  performFilter(filterBy: string):Iproduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
  }

  onNotify(data:number){
    console.log("the value"+data);
  }

}
