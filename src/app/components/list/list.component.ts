import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { Item } from '../../domains/item/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {
  @Input() items$: Observable<Item[]>;

  constructor() {}

  ngOnInit() {}
}
