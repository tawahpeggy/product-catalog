import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [

  // { path: '',redirectTo: '/category', pathMatch:'full'},
  // { path: 'catagory', component:CategoryComponent },
  // { path: 'product', component:ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
