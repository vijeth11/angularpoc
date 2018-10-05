import { Component, OnInit } from '@angular/core';
import { ProductlistService } from './productlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Acme Product Management';
  logedin:boolean=false;
  constructor(private productService:ProductlistService,private route:Router){
    this.logedin=this.productService.isAuthenticated();
  }
  ngOnInit(): void {
    this.logedin=this.productService.isAuthenticated();
  }
 

}
