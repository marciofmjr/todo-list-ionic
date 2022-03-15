// eslint-disable-next-line max-len
import { createBodyMock, createResponseMock, updateDoneBodyMock, updateDoneResponseMock, updateTitleBodyMock, updateTitleResponseMock, deleteResponseMock, getAllResponseMock } from './../mocks/item.mock';
import { environment } from './../../environments/environment';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ItemApiService } from './item-api.service';

describe('ItemApiService', () => {
  let service: ItemApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ItemApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get items data', () => {
    service.getItems().subscribe(items => expect(items).toEqual([]));
  });

  it('calling delete, should return the deleted item and call notifyChanges', () => {
    spyOn(service, 'notifyChange');

    service.delete(deleteResponseMock.id).subscribe(item => {
      expect(item).toEqual(deleteResponseMock);
      expect(service.notifyChange).toHaveBeenCalledWith();
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/items/${deleteResponseMock.id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(deleteResponseMock);
  });

  it('calling deleteAll, should return empty item array and call notifyChanges', () => {
    spyOn(service, 'notifyChange');

    service.deleteAll().subscribe(items => {
      expect(items).toEqual([]);
      expect(service.notifyChange).toHaveBeenCalledWith();
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/items`);
    expect(req.request.method).toEqual('DELETE');
    req.flush([]);
  });

  it('calling create, should return the created item and call notifyChanges', () => {
    spyOn(service, 'notifyChange');

    service.create(createBodyMock).subscribe(item => {
      expect(item).toEqual(createResponseMock);
      expect(service.notifyChange).toHaveBeenCalled();
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/items`);
    expect(req.request.method).toEqual('POST');
    req.flush(createResponseMock);
  });

  it('calling updateDone, should return updated item', () => {
    spyOn(service, 'notifyChange');

    service.updateDone(updateDoneBodyMock.id, updateDoneBodyMock.done).subscribe(item => {
      expect(item).toEqual(updateDoneResponseMock);
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/items/${updateDoneBodyMock.id}`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(updateDoneResponseMock);
  });

  it('calling updateTitle, should return updated item', () => {
    spyOn(service, 'notifyChange');

    service.updateTitle(updateTitleBodyMock.id, updateTitleBodyMock.title).subscribe(item => {
      expect(item).toEqual(updateTitleResponseMock);
    });

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/items/${updateTitleBodyMock.id}`);
    expect(req.request.method).toEqual('PATCH');
    req.flush(updateTitleResponseMock);
  });

  it('calling getAll, should return an array of items and call notifyChanges', () => {
    spyOn(service, 'notifyChange');

    service.getAll();
    service.getItems().subscribe(items => expect(items).toEqual(getAllResponseMock));

    const req = httpTestingController.expectOne(`${environment.apiBaseUrl}/items`);
    expect(req.request.method).toEqual('GET');
    req.flush(getAllResponseMock);

    expect(service.notifyChange).toHaveBeenCalledWith();
  });

});
