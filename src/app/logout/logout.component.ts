import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductlistService } from '../productlist.service';
import { Router } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private productService:ProductlistService,private route:Router) {
   }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('Auth','false');
    localStorage.setItem('username','');
    WelcomeComponent.isAuthenticated= this.productService.isAuthenticated();
    AppComponent.log=this.productService.isAuthenticated();
    //this.productService.updateLoggedIn(false);
    this.route.navigateByUrl('/welcome');
  }
  
}
