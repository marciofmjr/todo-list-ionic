import { ItemApiService } from './../../services/item-api.service';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass'],
})
export class ConfigComponent implements OnInit {

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private itemApiService: ItemApiService
  ) { }

  ngOnInit() {}

  async showMenu(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete all items',
        role: 'destructive',
        icon: 'trash',
        handler: async () => await this.confirmDeleteAllItems()
      }, {
        text: 'Change style',
        icon: 'color-palette-outline',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
  }

  async confirmDeleteAllItems(): Promise<Promise<void>> {
    const prompt = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure to delete all items?',
      buttons: [{
        text: 'Cancel'
      },
      {
        text: 'Save',
        handler: () => this.deleteAllItems()
      }]
  });
    await prompt.present();
  }

  deleteAllItems(): void {
    this.itemApiService.deleteAll().subscribe();
  }

}
