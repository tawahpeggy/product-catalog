import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category} from './category/category.model';
@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  constructor(private http : HttpClient) { }

//gets all categories
getAllCategories(): Observable<Category[]>
{
  return this.http.get<Category[]>("https://sheltered-falls-45349.herokuapp.com/api/category");
}


 }
