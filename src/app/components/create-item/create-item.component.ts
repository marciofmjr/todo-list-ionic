import { ItemFacade } from './../../domains/item/item-facade';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.sass'],
})
export class CreateItemComponent implements OnInit {
  inputTitle: string;

  constructor(private itemFacade: ItemFacade) {}

  ngOnInit() {}

  save(): void {
    if (this.inputTitle.length) {
      this.itemFacade.create({ title: this.inputTitle }).subscribe(() => {
        this.inputTitle = '';
      });
    }
  }
}
