import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { ApiService } from './api.service';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  path = 'items';
  private reloadSubject = new Subject<boolean>();

  constructor(private apiService: ApiService) { }

  getReload(): Observable<boolean> {
    return this.reloadSubject.asObservable();
  }

  reload(): void {
    this.reloadSubject.next(true);
  }

  create(item: Item): Observable<Item> {
    return this.apiService.save(item, this.path);
  }

  getAll(): Observable<Item[]> {
    return this.apiService.get(this.path);
  }

  getOne(id: string): Observable<Item> {
    return this.apiService.get(this.path + '/' + id);
  }

}
