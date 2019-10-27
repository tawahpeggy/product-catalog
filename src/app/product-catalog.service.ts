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


//Create a category
_Url="https://sheltered-falls-45349.herokuapp.com/api/category";
createCategory(category: Category){
 return this.http.post<any>(this._Url , category);


}
// //Edit a category
// updateCategory(categoryid: number){
//   return this.http.put<Category[]>('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryid);
  

// }
//delete a category
deleteCategory(categoryid: number){
  return this.http.delete<Category[]>('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryid);

}
 }
