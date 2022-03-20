import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { ItemFacade } from './../../domains/item/item-facade';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass'],
})
export class ConfigComponent implements OnInit {
  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private itemFacade: ItemFacade
  ) {}

  ngOnInit() {}

  async showMenu(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Delete all items',
          role: 'destructive',
          icon: 'trash',
          handler: async () => await this.confirmDeleteAllItems(),
        },
        {
          text: 'Change style',
          icon: 'color-palette-outline',
          data: 10,
        },
      ],
    });
    await actionSheet.present();
  }

  async confirmDeleteAllItems(): Promise<void> {
    const prompt = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure to delete all items?',
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Save',
          handler: () => this.deleteAllItems(),
        },
      ],
    });
    await prompt.present();
  }

  deleteAllItems(): void {
    this.itemFacade.delete().subscribe();
  }
}
