import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './productlist.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //isLoggedIn$: Observable<boolean>;
  classrefference:Object=AppComponent;
  static log:boolean =false;
  // isLoggedIn$:boolean;
  // subscribe:Subscription;
  title = 'Acme Product Management';
  constructor(private productService:ProductlistService,private route:Router){
  }
  ngOnInit(): void {
    // this.productService.updateLoggedIn(this.productService.isAuthenticated());
    // //this.isLoggedIn$ = this.productService.loggedIn;
    // this.subscribe = this.productService.loggedIn.subscribe(
    //   (message) => {
    //     this.isLoggedIn$ = message;
    //   }
    // );
    // console.log(typeof(this.isLoggedIn$));
  }

  
  onNotify(data:boolean){
  }

}
