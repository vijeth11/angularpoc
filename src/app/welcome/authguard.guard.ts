import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductlistService } from '../productlist.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private productService:ProductlistService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.productService.isAuthenticated()==false){
      this.productService.updateLoggedIn(false);
    alert("Please contact admin");
    }else{
      this.productService.updateLoggedIn(true);
    }
    return this.productService.isAuthenticated();
  }
}
