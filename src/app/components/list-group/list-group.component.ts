import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.sass'],
})
export class ListGroupComponent implements OnInit {

  @Input() title: string;
  @Input() items: Item[];
  @Input() done: boolean;

  constructor() { }

  ngOnInit() {}

}
