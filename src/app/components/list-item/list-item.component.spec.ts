import { itemMock } from './../../mocks/item.mock';
import { ItemApiService } from './../../services/item-api.service';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule, AlertController, IonItemSliding } from '@ionic/angular';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListItemComponent],
        imports: [IonicModule.forRoot(), HttpClientTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(ListItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calling changed, should call itemApiService updateDone method', () => {
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'updateDone').and.callThrough();

    component.changed(itemMock);
    expect(itemApiService.updateDone).toHaveBeenCalled();
  });

  it('calling edit, should call alertController create method', () => {
    const alertController = fixture.debugElement.injector.get(AlertController);
    spyOn(alertController, 'create').and.callThrough();

    component.edit(itemMock, {} as IonItemSliding);
    expect(alertController.create).toHaveBeenCalled();
  });

  it('calling delete, should call alertController create method', () => {
    const alertController = fixture.debugElement.injector.get(AlertController);
    spyOn(alertController, 'create').and.callThrough();

    component.delete(itemMock.id, {} as IonItemSliding);
    expect(alertController.create).toHaveBeenCalled();
  });
});
