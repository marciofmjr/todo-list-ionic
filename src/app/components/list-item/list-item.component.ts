import { Component, Input, OnInit } from '@angular/core';

import { Item } from './../../models/item.model';
import { ItemApiService } from './../../services/item-api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private itemApiService: ItemApiService) { }

  ngOnInit() {}

  delete(id: string): void {
    this.itemApiService.delete(id).subscribe(item => {
      this.itemApiService.reload();
    });
  }

}
