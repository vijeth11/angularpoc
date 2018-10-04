import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductlistService } from '../productlist.service';

@Injectable({
  providedIn: 'root'
})
export class ProductguardGuard implements CanActivate {
  length:number;
  constructor(private productService:ProductlistService,private router:Router){
   this.length=productService.getLength();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('id'+next.paramMap.get('id'));
    if(parseInt(next.paramMap.get('id'))<this.length)
    return true;
    else{
      alert("wrong url");
      this.router.navigate(['/product']);
      return false;
    }
  }
}
