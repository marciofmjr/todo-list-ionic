import { environment } from './../../../environments/environment';
import { itemsMock, itemMock } from './item.mock';
import { ItemStore } from './item.store';
import { TestBed } from '@angular/core/testing';

import { ItemFacade } from './item-facade';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('ItemFacade', () => {
  let facade: ItemFacade;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemStore],
    });
    facade = TestBed.inject(ItemFacade);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('calling items, should call itemStore selectedState', () => {
    const itemStore = TestBed.inject(ItemStore);
    spyOn(itemStore, 'selectState').and.callThrough();

    facade.items().subscribe();
    expect(itemStore.selectState).toHaveBeenCalled();
  });

  it('calling get, should return item', () => {
    const itemsMockObj = itemsMock();
    facade.get().subscribe((items) => expect(items).toEqual(itemsMockObj));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(itemsMockObj);
  });

  it('calling create, should return created item', () => {
    const itemsMockObj = itemMock();
    delete itemsMockObj.id;
    facade
      .create(itemsMockObj)
      .subscribe((itemCreated) => expect(itemCreated).toEqual(itemsMockObj));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(itemsMockObj);
  });

  it('calling patch, should return updated item', () => {
    const itemMockObj = itemMock();
    facade
      .patch({ id: itemMockObj.id, title: itemMockObj.title })
      .subscribe((item) => expect(item).toEqual(itemMockObj));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${itemMockObj.id}`
    );
    expect(req.request.method).toEqual('PATCH');
    req.flush(itemMockObj);
  });

  it('calling delete, should return deleted item', () => {
    const itemsMockObj = itemsMock();
    facade.delete().subscribe((items) => expect(items).toEqual(itemsMockObj));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(itemsMockObj);
  });
});
