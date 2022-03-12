import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

import { Item } from './../../models/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass'],
})
export class ListComponent implements OnInit {

  @Input() items: Item[];

  constructor() { }

  ngOnInit() {}

}
