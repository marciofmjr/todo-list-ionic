import { ConfigComponent } from './config/config.component';
import { PipesModule } from './../pipes/pipes.module';
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
    CreateItemComponent,
    ConfigComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    ListComponent,
    CreateItemComponent,
    ConfigComponent
  ]
})
export class ComponentsModule { }
