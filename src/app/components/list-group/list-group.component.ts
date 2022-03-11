import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.sass'],
})
export class ListGroupComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
