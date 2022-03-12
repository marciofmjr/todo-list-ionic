import { AlertController, IonItemSliding } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';

import { Item } from './../../models/item.model';
import { ItemApiService } from './../../services/item-api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class ListItemComponent implements OnInit {

  @Input() item: Item;

  constructor(
    private itemApiService: ItemApiService,
    public alertController: AlertController
  ) { }

  ngOnInit() {}

  changed(item: Item): void {
    this.itemApiService.updateDone(item.id, item.done).subscribe();
  }

  async delete(id: string, slidingItem: IonItemSliding): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => slidingItem.close()
        }, {
          text: 'Yes, delete',
          handler: () => this.itemApiService.delete(id).subscribe()
        }
      ]
    });
    await alert.present();
  }

}
