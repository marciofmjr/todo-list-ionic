import { Observable, Subject } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ApiService } from './../../services/api.service';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemApiService {
  private path = 'items';

  constructor(private apiService: ApiService) {}

  get(): Observable<Item[]> {
    return this.apiService.get<Item[]>(this.path);
  }

  delete(id?: string): Observable<Item | Item[]> {
    return this.apiService.delete<Item | Item[]>(this.path, id);
  }

  save(item: Item): Observable<Item> {
    return this.apiService.save(item, this.path);
  }

  patch(item: Partial<Item>): Observable<Item> {
    return this.apiService.patch<Item>(item, this.path);
  }
}
