import { Component, OnInit, Input } from '@angular/core';
import { Iproduct, ProductsComponent } from '../products/products.component';
import { ProductlistService } from '../productlist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  pageTitle : string = 'Product Detail';
  product:Iproduct;
  logedin: any;
  constructor(private productService:ProductlistService,private router : ActivatedRoute,private route: Router) {
    let id:string = router.snapshot.paramMap.get('id');
    this.productService.getProduct().subscribe((data)=>{
      this.product=data[id];
    });
   }

  ngOnInit() {
  }
 
  onBack(){
   this.route.navigate(['/product']);
  }
   
  logout(){
    localStorage.setItem('Auth','false');
    localStorage.setItem('username','');
    this.logedin=this. productService.isAuthenticated();
    this.route.navigate(['']);
  }
  
}
