import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http : HttpClient) { }
  //get all products under their specified categories
  getAllproducts():Observable<Product[]>
  {
    return this.http.get<Product[]>("https://sheltered-falls-45349.herokuapp.com/api/products/")
  }
  //create a product under a particular category
  createProduct(product: Product){}

  //delete a product under a particular catigory
  deleteProduct(productid: number){
  return this.http.delete<Product[]>("https://sheltered-falls-45349.herokuapp.com/api/products/"+productid)
  }
  
}
