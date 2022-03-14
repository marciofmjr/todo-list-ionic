import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.sass'],
})
export class ConfigComponent implements OnInit {

  constructor(private actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  async showMenu(): Promise<void> {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete all items',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
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

}
