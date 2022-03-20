import { Observable } from 'rxjs';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/domains/item/item.model';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.sass'],
})
export class ListGroupComponent {
  @Input() title: string;
  @Input() items$: Observable<Item[]>;
  @Input() done: boolean;

  constructor() {}
}
