import { Component, OnInit } from '@angular/core';

import { ItemApiService } from './../../services/item-api.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.sass'],
})
export class CreateItemComponent implements OnInit {
  inputTitle: string;

  constructor(private itemApiService: ItemApiService) {}

  ngOnInit() {}

  save(): void {
    if (this.inputTitle.length) {
      this.itemApiService
        .create({ title: this.inputTitle })
        .subscribe((item) => {
          this.inputTitle = '';
        });
    }
  }
}
