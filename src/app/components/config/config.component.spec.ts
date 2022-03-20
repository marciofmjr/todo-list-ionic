import { ItemFacade } from './../../domains/item/item-facade';
import { ItemStore } from 'src/app/domains/item/item.store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  IonicModule,
  ActionSheetController,
  AlertController,
} from '@ionic/angular';

import { ConfigComponent } from './config.component';

describe('ConfigComponent', () => {
  let component: ConfigComponent;
  let fixture: ComponentFixture<ConfigComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ConfigComponent],
        imports: [IonicModule.forRoot(), HttpClientTestingModule],
        providers: [ItemStore],
      }).compileComponents();

      fixture = TestBed.createComponent(ConfigComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling showMenu, should call actionSheetController create method', fakeAsync(() => {
    const actionSheetController = fixture.debugElement.injector.get(
      ActionSheetController
    );
    spyOn(actionSheetController, 'create').and.callThrough();
    component.showMenu();
    expect(actionSheetController.create).toHaveBeenCalled();
  }));

  it('calling confirmDeleteAllItems, should call alertController create method', () => {
    const alertController = fixture.debugElement.injector.get(AlertController);
    spyOn(alertController, 'create').and.callThrough();

    component.confirmDeleteAllItems();
    expect(alertController.create).toHaveBeenCalled();
  });

  it('calling deleteAllItems, should call itemApiService delete method', () => {
    const itemFacade = fixture.debugElement.injector.get(ItemFacade);
    spyOn(itemFacade, 'delete').and.callThrough();

    component.deleteAllItems();
    expect(itemFacade.delete).toHaveBeenCalled();
  });
});
