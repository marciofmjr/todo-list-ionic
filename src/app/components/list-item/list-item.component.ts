import { ItemFacade } from './../../domains/item/item-facade';
import { AlertController, IonItemSliding } from '@ionic/angular';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Item } from '../../domains/item/item.model';
import { ItemApiService } from './../../domains/item/item-api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class ListItemComponent {
  @Input() item: Item;

  constructor(
    private itemFacade: ItemFacade,
    public alertController: AlertController
  ) {}

  changed(item: Item): void {
    this.itemFacade.patch({ id: item.id, done: item.done }, false).subscribe();
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
          handler: () => this.itemFacade.delete(id).subscribe(),
        },
      ],
    });
    await alert.present();
  }

  updateTitle(item: Item, title?: string): void {
    if (title?.length) {
      this.itemFacade.patch({ id: item.id, title }).subscribe();
    }
  }
}
