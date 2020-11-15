import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../../models/product.model";
import {Observable} from "rxjs";
import { HttpEvent } from '@angular/common/http';
import { ProductsUrl } from 'src/app/core/productsUrl';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = environment.config.databaseURL;
  API_PRODUCTS = `${this.BASE_URL}`+ ProductsUrl.productsUrl +".json";

  constructor(
    private httpService: HttpService
  ) {
  }




  getProducts(): Observable<ProductModel[]> {
    return this.httpService.get<ProductModel[]>(this.API_PRODUCTS).pipe(map((res: ProductModel[]) => {
      const productArray: ProductModel[] = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          productArray.push({ ...res[key], $key: key });
        }
      }
      return productArray;
    }))
  }


  postProduct(body: any): Observable<any[]> {
    return this.httpService.post<Observable<HttpEvent<any>>>(this.API_PRODUCTS, body);
  }

  findProduct() {
  }

  getProductByCategory(category: String): Observable<ProductModel[]> {
    return this.httpService.get<ProductModel[]>(this.API_PRODUCTS).pipe(map((res: ProductModel[]) => {
      const productArray: ProductModel[] = [];
      const productsOfCategory: ProductModel[] = []

      for(const key in res){
        if(res.hasOwnProperty(key)){
          productArray.push({ ...res[key], $key: key });
        }
      }
      productArray.filter(res => {
        if(res.category === category){
          productsOfCategory.push({...res})
        }
      })

      return productsOfCategory;
    }))
  }

}
