import { Item } from './../../models/item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {}

}
