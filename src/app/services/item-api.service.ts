import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  path = 'items';

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Item[]> {
    return this.apiService.get(this.path);
  }

  getOne(id: string): Observable<Item> {
    return this.apiService.get(this.path + '/' + id);
  }

}
