import { Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  logedin: boolean=false;
  logg: any;
  constructor(private productService:ProductlistService,private route:Router) { 
    this.isAuthenticated=this.productService.isAuthenticated();
    this.logedin=this.isAuthenticated;

  }

  login(username,password){
  let data:any={
    "username":username,
    "password":password
  }
  console.log(data);
  this.productService.login(data).subscribe((response)=>{
    if(response.body.status==200){
       localStorage.setItem('Auth','true');
       localStorage.setItem('username',username);
       this.isAuthenticated=true
       this.route.navigate(['product']);
    }
    else{
      alert("conatact admin");
      localStorage.setItem('Auth','false');
      localStorage.setItem('username','');
      this.isAuthenticated=false
      this.route.navigate(['welcome']);
    }
  })
  }
  ngOnInit() {
    this.isAuthenticated=this.productService.isAuthenticated();
    this.logedin=this.isAuthenticated;
  }
  logout(){
    localStorage.setItem('Auth','false');
    localStorage.setItem('username','');
    this.logedin=this.productService.isAuthenticated();
    this.route.navigate(['']);
  }

}
