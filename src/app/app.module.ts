import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgSimpleStateModule } from 'ng-simple-state';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { ItemStore } from './domains/item/item.store';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgSimpleStateModule.forRoot({
      enableDevTool: !environment.production,
      enableLocalStorage: false,
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ItemStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
