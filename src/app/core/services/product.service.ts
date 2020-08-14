import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../../client/product/models/product.model";
import {Observable} from "rxjs";
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'https://web-shop-fc3e0.firebaseio.com';
  API_PRODUCTS = `${this.BASE_URL}/products`;

  constructor(
    private httpService: HttpService
  ) {
  }


  getProducts(): Observable<ProductModel> {
    return this.httpService.get<ProductModel>(this.API_PRODUCTS)
  }

  postProduct(body: any): Observable<any> {
    return this.httpService.post<Observable<HttpEvent<any>>>(this.API_PRODUCTS, body);
  }
}
