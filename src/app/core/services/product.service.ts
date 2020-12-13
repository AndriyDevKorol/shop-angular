import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {ProductModel} from "../../models/product.model";
import {Observable} from "rxjs";
import { HttpEvent } from '@angular/common/http';
import { ProductsUrl } from 'src/app/core/productsUrl';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = environment.config.databaseURL;
  API_PRODUCTS = `${this.BASE_URL}`+ ProductsUrl.productsUrl +".json";

  constructor(
    private httpService: HttpService,
    private angularFireDatabase: AngularFireDatabase,
  ) {}




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

  getProduct(id: any):Observable<ProductModel> {
    return this.httpService.get<ProductModel[]>(this.API_PRODUCTS).pipe(map((res: ProductModel[]) => {
      const productArray: ProductModel[] = [];
      let productSelected: ProductModel;

      for(const key in res){
        if(res.hasOwnProperty(key)){
          productArray.push({ ...res[key], $key: key });
        }
      }
      productArray.filter(res => {
        if(res.$key === id){
          productSelected = res
        }
      })

      return productSelected;
    }))

  }

  postProduct(body: any): Observable<ProductModel[]> {
    return this.httpService.post<Observable<HttpEvent<any>>>(this.API_PRODUCTS, body);
  }

  addProduct(product: ProductModel) {
    return firebase.database().ref('products/').push(product)
    .then(() => {
      console.log('success deleting ' + product.title);
    })
    .catch((error) => {
      console.log('Delete failed ' + product.title)
    });
  }

  deleteProduct(product: ProductModel) {
   return this.angularFireDatabase.object('products/' + product.$key).remove()

  // return firebase.database().ref('products/' + product.$key).remove()

    // this.uploadService.deleteFile(product.imageRefs);

    // return this.angularFireDatabase
    //   .object<ProductModel>(url)
    //   .remove()
      .then(() => {
        console.log('success deleting ' + product.$key);
        alert('Продукт ' + product.title + ' успішно видалено');
      })
      .catch((error) => {
        console.log('Delete failed ' + product.$key + ' - ' + error);
      });
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
