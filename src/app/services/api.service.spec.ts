import {
  saveUpdateApiBodyMock,
  saveUpdateApiResponseMock,
  saveCreateApiBodyMock,
  saveCreateApiResponseMock,
  getApiResponseMock,
  deleteApiResponseMock,
  patchApiResponseMock,
} from '../domains/item/item.mock';
import { environment } from './../../environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calling save with body with id, should return updated element', () => {
    const itemMockObj = saveUpdateApiBodyMock();
    const responseMock = saveUpdateApiResponseMock();
    const id = itemMockObj.id;
    service.save(itemMockObj, 'items').subscribe((response) => {
      expect(response).toBe(responseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${id}`
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(responseMock);
  });

  it('calling save with body without id, should return created element', () => {
    const itemMockObj = saveCreateApiBodyMock();
    const responseMock = saveCreateApiResponseMock();
    service.save(itemMockObj, 'items').subscribe((response) => {
      expect(response).toBe(responseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(responseMock);
  });

  it('calling get, should return expected elements', () => {
    const responseMock = getApiResponseMock();
    service.get('items').subscribe((response) => {
      expect(response).toBe(responseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(responseMock);
  });

  it('calling get with params, should return expected elements', () => {
    const responseMock = getApiResponseMock();
    service.get('items', { active: true }).subscribe((response) => {
      expect(response).toBe(responseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items?active=true`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(responseMock);
  });

  it('calling delete, should return deleted element', () => {
    const responseMock = deleteApiResponseMock();
    service.delete('items', responseMock.id).subscribe((item) => {
      expect(item).toBe(responseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${responseMock.id}`
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(responseMock);
  });

  it('calling path, should return updated element', () => {
    const body = { ...patchApiResponseMock() };
    const responseMock = patchApiResponseMock();
    service.patch(body, 'items').subscribe((item) => {
      expect(item).toBe(responseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${responseMock.id}`
    );
    expect(req.request.method).toEqual('PATCH');
    req.flush(responseMock);
  });
});
