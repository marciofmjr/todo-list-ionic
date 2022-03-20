import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemFacade } from './../../domains/item/item-facade';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  searchText: string;
  searchTextControl = new FormControl();

  constructor(private itemFacade: ItemFacade) {}

  ngOnInit() {
    this.searchTextControl.valueChanges.subscribe((searchText: string) => {
      this.itemFacade.search(searchText);
    });
  }
}
