import { ItemApiService } from './../../services/item-api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  searchText: string;
  searchTextControl = new FormControl();

  constructor(private itemApiService: ItemApiService) {}

  ngOnInit() {
    this.searchTextControl.valueChanges.subscribe((searchText) => {
      this.itemApiService.search(searchText);
    });
  }
}
