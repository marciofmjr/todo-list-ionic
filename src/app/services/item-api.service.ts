import { Observable, Subject } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  path = 'items';
  items$ = new Subject<Item[]>();
  items: Item[];

  constructor(private apiService: ApiService) { }

  getItems(): Observable<Item[]> {
    return this.items$.asObservable();
  }

  delete(id: string): Observable<Item> {
    return this.apiService.delete<Item>(id, this.path).pipe(tap(deletedItem => {
      this.items = this.items.filter((item) => item.id !== deletedItem.id);
      this.notifyChange();
    }));
  }

  create(item: Item): Observable<Item> {
    return this.apiService.save(item, this.path).pipe(tap(createdItem => {
      this.items.unshift({...createdItem, visible: true});
      this.notifyChange();
    }));
  }

  search(searchText: string): void {
    this.items = this.items.map(item => {
      item.visible = item.title.includes(searchText);
      return item;
    });
    this.notifyChange();
  }

  getAll(): void {
    this.apiService.get<Item[]>(this.path).pipe(first()).subscribe(items => {
      this.items = items.map(item => {
        item.visible = true;
        return item;
      });
      this.notifyChange();
    });
  }

  getOne(id: string): Observable<Item> {
    return this.apiService.get(this.path + '/' + id);
  }

  notifyChange(): void {
    this.items$.next(this.items);
  }

}
