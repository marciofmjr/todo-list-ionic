import { ListItemComponent } from './list-item/list-item.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListComponent } from './list/list.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ListComponent,
    ListGroupComponent,
    ListItemComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    ListComponent
  ]
})
export class ComponentsModule { }
