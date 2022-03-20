import { tap } from 'rxjs/operators';
import { ItemApiService } from './item-api.service';
import { ItemStore } from './item.store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemFacade {
  constructor(
    private itemStore: ItemStore,
    private itemApiService: ItemApiService
  ) {}

  items(): Observable<Item[]> {
    return this.itemStore.selectState();
  }

  get(): Observable<Item[]> {
    return this.itemApiService
      .get()
      .pipe(tap((items) => this.itemStore.set(items)));
  }

  create(item: Item): Observable<Item> {
    return this.itemApiService
      .save(item)
      .pipe(tap((itemCreated) => this.itemStore.add(itemCreated)));
  }

  patch(item: Partial<Item>, updateStore: boolean = true): Observable<Item> {
    return this.itemApiService.patch(item).pipe(
      tap((itemUpdated) => {
        if (updateStore) {
          this.itemStore.update(itemUpdated);
        }
      })
    );
  }

  delete(id?: string): Observable<Item[] | Item> {
    return this.itemApiService
      .delete(id)
      .pipe(tap((items) => this.itemStore.delete(items)));
  }

  search(searchText: string): void {
    this.itemStore.search(searchText);
  }
}
