import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductlistService } from '../productlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  pageTitle:string="Welcome";
  isAuthenticated:boolean=false;
  constructor(private productService:ProductlistService,private route:Router) { }

  login(username,password){
  let data:any={
    "username":username,
    "password":password
  }
  console.log(data);
  this.productService.login(data).subscribe((response)=>{
    if(response.body.status==200){
       localStorage.setItem('Auth','true');
       localStorage.setItem('Username',username);
       this.isAuthenticated=true
       this.route.navigate(['product']);
    }
    else{
      alert("conatct admin");
      localStorage.setItem('Auth','false');
      localStorage.setItem('Username','');
      this.isAuthenticated=false
      this.route.navigate(['welcome']);
    }
  })
  }
  ngOnInit() {
    this.isAuthenticated=this.productService.isAuthenticated();
  }

}
