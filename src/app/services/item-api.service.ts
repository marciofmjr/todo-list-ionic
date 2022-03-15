import { Observable, Subject } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  private items$ = new Subject<Item[]>();
  private items: Item[] = [];
  private path = 'items';

  constructor(private apiService: ApiService) { }

  getItems(): Observable<Item[]> {
    return this.items$.asObservable();
  }

  delete(id: string): Observable<Item> {
    return this.apiService.delete<Item>(this.path, id).pipe(tap(deletedItem => {
      this.items = this.items.filter((item) => item.id !== deletedItem.id);
      this.notifyChange();
    }));
  }

  deleteAll(): Observable<Item[]> {
    return this.apiService.delete<Item[]>(this.path).pipe(tap(items => {
      this.items = [];
      this.notifyChange();
    }));
  }

  create(item: Item): Observable<Item> {
    return this.apiService.save(item, this.path).pipe(tap(createdItem => {
      this.items.unshift({...createdItem, visible: true});
      this.notifyChange();
    }));
  }

  updateDone(id: string, done: boolean): Observable<Item> {
    return this.apiService.patch<Item>({ id, done }, this.path);
  }

  updateTitle(id: string, title: string): Observable<Item> {
    return this.apiService.patch<Item>({ id, title }, this.path);
  }

  search(searchText: string): void {
    this.items = this.items.map(item => {
      item.visible = item.title.includes(searchText);
      return item;
    });
    this.notifyChange();
  }

  getAll(): void {
    this.apiService.get<Item[]>(this.path).subscribe(items => {
      this.items = items.map(item => {
        item.visible = true;
        return item;
      });
      this.notifyChange();
    });
  }

  notifyChange(): void {
    this.items$.next(this.items);
  }

}
