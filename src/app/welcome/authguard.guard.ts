import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductlistService } from '../productlist.service';
import { AppComponent } from '../app.component';
import { flatten } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private productService:ProductlistService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.productService.isAuthenticated()==false){
      //this.productService.updateLoggedIn(false);
      AppComponent.log=false;
    alert("Please contact admin");
    }else{
      AppComponent.log=true;
     // this.productService.updateLoggedIn(true);
    }
    return this.productService.isAuthenticated();
  }
}
