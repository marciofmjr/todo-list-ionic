import {
  saveUpdateApiBodyMock,
  saveUpdateApiResponseMock,
  saveCreateApiBodyMock,
  saveCreateApiResponseMock,
  getApiResponseMock,
  deleteApiResponseMock,
  patchApiResponseMock,
} from './../mocks/item.mock';
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
    const id = saveUpdateApiBodyMock.id;
    service.save(saveUpdateApiBodyMock, 'items').subscribe((response) => {
      expect(response).toBe(saveUpdateApiResponseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${id}`
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(saveUpdateApiResponseMock);
  });

  it('calling save with body without id, should return created element', () => {
    const id = saveCreateApiBodyMock.id;
    service.save(saveCreateApiBodyMock, 'items').subscribe((response) => {
      expect(response).toBe(saveCreateApiResponseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('POST');
    req.flush(saveCreateApiResponseMock);
  });

  it('calling get, should return expected elements', () => {
    service.get('items').subscribe((response) => {
      expect(response).toBe(getApiResponseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(getApiResponseMock);
  });
  it('calling get with params, should return expected elements', () => {
    service.get('items', { active: true }).subscribe((response) => {
      expect(response).toBe(getApiResponseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items?active=true`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(getApiResponseMock);
  });

  it('calling delete, should return deleted element', () => {
    service.delete('items', deleteApiResponseMock.id).subscribe((item) => {
      expect(item).toBe(deleteApiResponseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${deleteApiResponseMock.id}`
    );
    expect(req.request.method).toEqual('DELETE');
    req.flush(deleteApiResponseMock);
  });

  it('calling path, should return updated element', () => {
    const body = { ...patchApiResponseMock };
    service.patch(body, 'items').subscribe((item) => {
      expect(item).toBe(patchApiResponseMock);
    });

    const req = httpTestingController.expectOne(
      `${environment.apiBaseUrl}/items/${patchApiResponseMock.id}`
    );
    expect(req.request.method).toEqual('PATCH');
    req.flush(patchApiResponseMock);
  });
});
