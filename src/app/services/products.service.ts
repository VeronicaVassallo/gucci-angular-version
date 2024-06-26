import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  //method to add products to database test of fireBase
  insertProduct(url: string, body: {}) {
    return this.http.post(url, body);
  }

  //method to get all products
  getProducts(url: string) {
    return this.http.get(url);
  }

  //delete product
  deleteProduct(url: string, id: string) {
    console.log('lala' + `${url}/${id}.json`);
    return this.http.delete(`${url}/${id}.json`);
  }
}
