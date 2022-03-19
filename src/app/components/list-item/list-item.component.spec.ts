import { FormsModule } from '@angular/forms';
import { PipesModule } from './../../pipes/pipes.module';
import { itemMock } from './../../mocks/item.mock';
import { ItemApiService } from './../../services/item-api.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule, AlertController, IonItemSliding } from '@ionic/angular';
import { render, screen, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { ListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  const slidingItemMock: Partial<IonItemSliding> = {
    close: () => Promise.resolve(),
  };

  const setup = () => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  const setupTestingLibrary = async (
    componentProperties: Partial<ListItemComponent> = {}
  ) =>
    render(ListItemComponent, {
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        PipesModule,
        FormsModule,
      ],
      componentProperties,
    });

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it('should create with setupTestingLibrary', async () => {
    const { container } = await setupTestingLibrary();
    expect(container).toBeTruthy();
  });

  it('clicking in edit button, should open edit modal and click in cancel', async () => {
    await setupTestingLibrary({
      item: {
        id: '2aa3f5e9-cf16-440d-909a-733540de7570',
        title: 'some item',
        done: false,
        visible: true,
        createdAt: '2022-03-12T13:59:21.406Z',
      },
    });

    userEvent.click(document.body.querySelector('#editButton'));
    await waitFor(() => screen.getByText('Update'));

    const cancelButton = document.body.querySelectorAll('button')[0];
    userEvent.click(cancelButton);
    expect(cancelButton).toBeTruthy();
  });

  it('calling changed, should call itemApiService updateDone method', () => {
    setup();
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'updateDone').and.callThrough();

    component.changed(itemMock);
    expect(itemApiService.updateDone).toHaveBeenCalled();
  });

  it('calling edit, should call alertController create method', () => {
    setup();
    const alertController = fixture.debugElement.injector.get(AlertController);
    spyOn(alertController, 'create').and.callThrough();

    component.edit(itemMock, slidingItemMock as IonItemSliding);
    expect(alertController.create).toHaveBeenCalled();
  });

  it('calling delete, should call alertController create method', () => {
    setup();
    const alertController = fixture.debugElement.injector.get(AlertController);
    spyOn(alertController, 'create').and.callThrough();

    component.delete(itemMock.id, slidingItemMock as IonItemSliding);
    expect(alertController.create).toHaveBeenCalled();
  });

  it('calling updateTitle, should call itemApiService updateTitle method', () => {
    setup();
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'updateTitle').and.callThrough();

    component.updateTitle(itemMock, 'new title');
    expect(itemApiService.updateTitle).toHaveBeenCalled();
  });

  it('calling updateTitle without title, should not call itemApiService updateTitle method', () => {
    setup();
    const itemApiService = fixture.debugElement.injector.get(ItemApiService);
    spyOn(itemApiService, 'updateTitle').and.callThrough();

    component.updateTitle(itemMock);
    expect(itemApiService.updateTitle).not.toHaveBeenCalled();
  });
});
