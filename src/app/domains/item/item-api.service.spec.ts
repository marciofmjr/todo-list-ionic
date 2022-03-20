// eslint-disable-next-line max-len
import {
  patchItemBodyMock,
  patchItemResponseMock,
  createBodyMock,
  createResponseMock,
  deleteResponseMock,
} from './item.mock';
import { environment } from '../../../environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ItemApiService } from './item-api.service';
import { itemsMock } from './item.mock';

describe('ItemApiService', () => {
  let service: ItemApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ItemApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });

  it('calling get, should return items', async () => {
    service.get().subscribe((items) => expect(items).toEqual(itemsMock()));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(itemsMock());
  });

  it('calling delete, should return the deleted item', async () => {
    service
      .delete(deleteResponseMock().id)
      .subscribe((item) => expect(item).toEqual(deleteResponseMock()));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${deleteResponseMock().id}`
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(deleteResponseMock());
  });

  it('calling save, should return the created item', async () => {
    service
      .save(createBodyMock())
      .subscribe((item) => expect(item).toEqual(createResponseMock()));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(createResponseMock());
  });

  it('calling patch, should return the updated item', async () => {
    service
      .patch(patchItemBodyMock())
      .subscribe((item) => expect(item).toEqual(patchItemResponseMock()));

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${patchItemBodyMock().id}`
    );
    expect(req.request.method).toEqual('PATCH');
    req.flush(patchItemResponseMock());
  });
});
