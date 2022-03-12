import { FormsModule } from '@angular/forms';
import { CreateItemComponent } from './create-item/create-item.component';
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
    ListItemComponent,
    CreateItemComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ListComponent,
    CreateItemComponent
  ]
})
export class ComponentsModule { }
