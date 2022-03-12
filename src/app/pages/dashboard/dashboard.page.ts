import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Item } from './../../models/item.model';
import { ItemApiService } from './../../services/item-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.sass'],
})
export class DashboardPage implements OnInit {

  items$: Observable<Item[]>;

  constructor(private itemApiService: ItemApiService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.items$ = this.itemApiService.getAll();
  }

}
