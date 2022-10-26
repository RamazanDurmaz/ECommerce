import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { SubCategory } from '../models/subCategory';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  apiUrl = 'https://localhost:44330/api/subcategories/getall';
  constructor(private httpClient: HttpClient) { }

  getSubCategories():Observable<ListResponseModel<SubCategory>> {
    return this.httpClient.get<ListResponseModel<SubCategory>>(this.apiUrl)
  }

  
}