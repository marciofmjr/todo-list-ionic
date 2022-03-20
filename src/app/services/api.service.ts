import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  save<T extends { id?: string }>(data: T, url: string): Observable<T> {
    return data.id?.length
      ? this.put(data, url + '/' + data.id)
      : this.post(data, url);
  }

  get<T>(url: string, params?: any): Observable<T> {
    const httpParams = this.formatParams(params);
    return this.http.get(this.formatUrl(url), {
      params: httpParams,
    }) as Observable<T>;
  }

  delete<T>(url: string, id?: string): Observable<T> {
    return this.http.delete(this.formatUrl(url, id)) as Observable<T>;
  }

  patch<T>(data: any, url: string): Observable<T> {
    const id = data.id;
    delete data.id;
    return this.http.patch(this.formatUrl(url, id), data) as Observable<T>;
  }

  private post<T>(data: T, url: string): Observable<T> {
    return this.http.post(this.formatUrl(url), data) as Observable<T>;
  }

  private put<T extends { id?: string }>(data: T, url: string): Observable<T> {
    delete data.id;
    return this.http.put(this.formatUrl(url), data) as Observable<T>;
  }

  private formatUrl(url: string, id?: string): string {
    url = id?.length ? url + '/' + id : url;
    return environment.apiBaseUrl + '/' + url;
  }

  private formatParams(params?: any): HttpParams {
    let httpParams = new HttpParams();

    // eslint-disable-next-line guard-for-in
    for (const key in params) {
      httpParams = httpParams.append(key, params[key]);
    }

    return httpParams;
  }
}
