import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { Iproduct } from'./products/products.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of , BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

private productUrl = 'http://127.0.0.1:4900/api/record';
//loggedIn = new BehaviorSubject<boolean>(false);
// loggedIn=new Subject<boolean>();
     static lengths:number;

  // updateLoggedIn(val){
  //     this.loggedIn.next(val);
  // }

  constructor(private http: HttpClient) {
    // this.loggedIn.subscribe(value => {
    //   console.log("Subscription got", value); 
    // });
   }

  getProduct(): Observable<Iproduct[]> {
  return this.http.get<Iproduct[]>(this.productUrl).pipe(
  map(data => data || []),tap(data=> ProductlistService.lengths=data.length));
  }
  getLength():number{
    return ProductlistService.lengths
  }
  isAuthenticated():boolean{
    if(localStorage.getItem('Auth')=='true'){
       return true;
     } else{
       return false;
     }
  }
  login(data:any):Observable<any>{
    return this.http.post('http://127.0.0.1:4900/api/login',data,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    })
    .pipe(map(response => 
      response || []));
  }
  addProduct(data:any):Observable<any>{
    return this.http.post<any>('',data,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response'
    })
    .pipe(map(response => response || []));
  }
  
}
