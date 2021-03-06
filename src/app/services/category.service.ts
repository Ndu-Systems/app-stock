import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../shared/config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCatagories(): Observable<any>{
    return this.http.get<any>(`${API_BASE}/api/categories/get-categories.php`);
  }
  getStockItemNames(): Observable<any>{
    return this.http.get<any>(`${API_BASE}/api/stock-details/get-stock-details.php`);
  }
  addStockItem(data): Observable<any>{
    return this.http.post(`${API_BASE}/api/stock/add-stock.php`,data);
  }
  getStockItems(): Observable<any>{
    return this.http.get<any>(`${API_BASE}/api/stock/get-stock.php`);
  }
}
