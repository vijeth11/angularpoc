import { Injectable } from '@angular/core';
import {Iproduct} from'./products/products.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  private productUrl = 'api/products/products.json';
  constructor(private http:HttpClient) { }

  getProduct():Observable<Iproduct[]>{
  return this.http.get<Iproduct[]>('./assets/products.json').pipe(
  map(data => data || []));
  }
}
