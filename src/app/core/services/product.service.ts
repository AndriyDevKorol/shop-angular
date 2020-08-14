import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../../client/product/models/product.model";
import {Observable} from "rxjs";
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_API_TV_URL = 'https://web-shop-fc3e0.firebaseio.com/';
  API_TV_GET_RECOMMENDS = `${this.BASE_API_TV_URL}/shows/6771`;

  constructor(
    private httpService: HttpService
  ) {
  }


  getProducts(): Observable<ProductModel> {
    return this.httpService.get<ProductModel>(this.API_TV_GET_RECOMMENDS)
  }

  postProduct(body: any): Observable<any> {
    return this.httpService.post<Observable<HttpEvent<any>>>('https://web-shop-fc3e0.firebaseio.com/products.json', body);
  }
}
