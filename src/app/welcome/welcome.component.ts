import { Component, OnInit, Output, EventEmitter, OnDestroy} from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductlistService } from '../productlist.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit,OnDestroy {
  
  ngOnDestroy(): void {
   console.log("destroyed successfully");
  }

  pageTitle:string="Welcome";
  static isAuthenticated:boolean=false;
  logg: any;
  constructor(private productService:ProductlistService,private route:Router) { 
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
       WelcomeComponent.isAuthenticated=true
       AppComponent.log=true;
       this.route.navigate(['product']);
       //this.productService.updateLoggedIn(true);
    }
    else{
      alert("conatact admin");
      localStorage.setItem('Auth','false');
      localStorage.setItem('username','');
      WelcomeComponent.isAuthenticated=false
      AppComponent.log=false;
      this.route.navigate(['welcome']);
      //this.productService.updateLoggedIn(false);
    }
  })
  }
  ngOnInit() {
    WelcomeComponent.isAuthenticated=this.productService.isAuthenticated();
    //this.productService.updateLoggedIn(this.productService.isAuthenticated());
  }
  

}
