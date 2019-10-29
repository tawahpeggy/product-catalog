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
// //Error handler function
// private handleError<T> (operation='operation',result?:T){
//   return (error:any): Observable<T>=>{ 
//     Console.error(error);
//     return of(result as T);
//   };
// }
//gets all categories
getAllCategories(): Observable<Category[]>
{
  return this.http.get<Category[]>("https://sheltered-falls-45349.herokuapp.com/api/category");
}

// //Get a single category
// getCategory(id:number):observable<category>{
//   const Url=`${apiUrl}/${id}`;
//   return this.http.get<category>(url.pipe(tap(_console.log(`fetched category id=${id=&$id}`)))),
// }

//Create a category
_Url="https://sheltered-falls-45349.herokuapp.com/api/category";
createCategory(category: Category){
 return this.http.post<any>(this._Url , category);


}
//Edit a category
updateCategory(categoryid , category):Observable<any>{
  const _Url= `${'https://sheltered-falls-45349.herokuapp.com/api/category/' }/${ categoryid }`;
   return this.http.put(_Url,category).pipe(tap(_ =>console.log(`updated category categoryid=${categoryid}`)),
   
   );
  }

  //delete a category
deleteCategory(categoryid: number){
  return this.http.delete<Category[]>('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryid);

}
 }
