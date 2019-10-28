import { Category } from '../category/category.model';

export class Product{
  category:{
      id: number,
      name:string
  };
  id:number;
  name:string;
  price:number;
} 