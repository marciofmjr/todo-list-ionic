import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Item } from './../../models/item.model';
import { ItemApiService } from './../../services/item-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.sass'],
})
export class DashboardPage implements OnInit {

  items: Item[];
  atLeastOneVisible = true;

  constructor(private itemApiService: ItemApiService) { }

  ngOnInit() {
    this.setItems();
    this.reload();
  }

  setItems(): void {
    this.itemApiService.getItems().subscribe(items => {
      this.items = items;
      this.atLeastOneVisible = this.items.some(item => item.visible);
    });
  }

  reload(): void {
    this.itemApiService.getAll();
  }

}
