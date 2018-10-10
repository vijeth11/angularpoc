import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './productlist.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  title = 'Acme Product Management';
  constructor(private productService:ProductlistService,private route:Router){
  }
  ngOnInit(): void {
    this.productService.updateLoggedIn(this.productService.isAuthenticated());
    this.isLoggedIn$ = this.productService.loggedIn;
  }

  
  onNotify(data:boolean){
  }

}
