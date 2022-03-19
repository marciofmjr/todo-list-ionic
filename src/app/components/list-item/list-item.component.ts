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
  ) {}

  ngOnInit() {}

  changed(item: Item): void {
    this.itemApiService.updateDone(item.id, item.done).subscribe();
  }

  async edit(item: Item, slidingItem: IonItemSliding): Promise<void> {
    slidingItem.close();
    const prompt = await this.alertController.create({
      header: 'Update',
      message: 'Change item title',
      inputs: [{ name: 'title', placeholder: 'Title', value: item.title }],
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Save',
          handler: (data) => this.updateTitle(item, data.title),
        },
      ],
    });
    await prompt.present();
  }

  async delete(id: string, slidingItem: IonItemSliding): Promise<void> {
    slidingItem.close();
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Delete this item?',
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Yes, delete',
          handler: () => this.itemApiService.delete(id).subscribe(),
        },
      ],
    });
    await alert.present();
  }

  updateTitle(item: Item, title?: string): void {
    if (title?.length) {
      this.itemApiService.updateTitle(item.id, title).subscribe();
      item.title = title;
    }
  }
}
