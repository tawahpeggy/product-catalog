import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  AddCategoryComponent } from './category/add-category/add-category.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { CategoryDetailsComponent } from './category/category-list/category-details/category-details.component';
import { AppComponent } from './app.component';
import{ DeleteCategoryComponent } from './category/delete-category/delete-category.component';


const routes: Routes = [

  // { path: '',redirectTo: '/category', pathMatch:'full'},
   { path: 'category', component:CategoryComponent },
   { path: 'product', component:ProductComponent },
   { path: 'addCategory', component:AddCategoryComponent },
   { path: 'signup',component:SignupComponent },
   { path: 'login',component:LoginComponent },
   { path:'categoryDetails' ,component:CategoryDetailsComponent },
   { path:'home' ,component:AppComponent },
   { path: 'delete' ,component:DeleteCategoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
              NgbModule
           ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
