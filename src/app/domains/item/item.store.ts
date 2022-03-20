/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable } from '@angular/core';
import { NgSimpleStateBaseStore } from 'ng-simple-state';

import { Item } from './item.model';

@Injectable()
export class ItemStore extends NgSimpleStateBaseStore<Item[]> {
  initialState(): Item[] {
    return [];
  }

  set(items: Item[]): void {
    this.restartState();
    items = items.reverse();
    for (const item of items) {
      this.add(item);
    }
  }

  add(item: Item): void {
    item.visible = this.getItemVisibility(item);
    this.setState((state) => [...state, item]);
  }

  update(itemUpdated: Item): void {
    itemUpdated.visible = this.getItemVisibility(itemUpdated);
    this.setState((state) =>
      state.map((item) =>
        item.id === itemUpdated.id ? { ...itemUpdated } : item
      )
    );
  }

  delete(items: Item | Item[]): void {
    Array.isArray(items)
      ? this.restartState()
      : this.setState((state) => state.filter((item) => item.id !== items.id));
  }

  search(searchText: string): void {
    this.setState((state) =>
      state.map((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
          ? { ...item, visible: true }
          : { ...item, visible: false }
      )
    );
  }

  getItemVisibility(item: Item): boolean {
    if (item.visible === false) {
      return false;
    }
    return true;
  }
}
