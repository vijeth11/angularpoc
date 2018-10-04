import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { Iproduct } from'./products/products.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private productUrl = 'api/products/products.json';
  static lengths:number;
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Iproduct[]> {
  return this.http.get<Iproduct[]>('./assets/products.json').pipe(
  map(data => data|| []),tap(data=> ProductlistService.lengths=data.length));
  }
  getLength():number{
    return ProductlistService.lengths
  }
}
