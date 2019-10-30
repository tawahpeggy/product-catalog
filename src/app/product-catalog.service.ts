import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map,catchError,tap} from 'rxjs/operators';
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

//Create a category
_Url="https://sheltered-falls-45349.herokuapp.com/api/category";
createCategory(category: Category){
 return this.http.post<any>(this._Url , category);


}

//get a particular category
getCategory(categoryid:number): Observable<Category>
{
  const _Url= `${'https://sheltered-falls-45349.herokuapp.com/api/category/' }/${ categoryid }`;
  return this.http.get<Category>(_Url);
}
//Edit a category
updateCategory(categoryid: number , category: CategoryForm){
  const _Url= `${'https://sheltered-falls-45349.herokuapp.com/api/category/' }/${ categoryid }`;
  
  
   return this.http.put(_Url,category)
   
   
  }

  //delete a category
deleteCategory(categoryid: number){
  return this.http.delete<Category[]>('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryid);

}
 }

 export class CategoryForm {
   id?: number;
   name: string;
 }
