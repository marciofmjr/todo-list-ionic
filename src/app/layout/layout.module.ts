import { ComponentsModule } from './../components/components.module';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ComponentsModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SearchBarComponent
  ]
})
export class LayoutModule { }
