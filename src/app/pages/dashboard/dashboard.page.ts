import { ItemFacade } from './../../domains/item/item-facade';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Item } from '../../domains/item/item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.sass'],
})
export class DashboardPage implements OnInit {
  items$: Observable<Item[]>;
  atLeastOneVisible = true;

  constructor(private itemFacade: ItemFacade) {}

  ngOnInit() {
    this.items$ = this.itemFacade.items();
    this.itemFacade.get().subscribe();
  }
}
