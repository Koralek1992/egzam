import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormModel } from '../models/form.model';

@Injectable()
export class FormService {
  constructor(private _httpClient: HttpClient) {
  }

  create(form: Omit<FormModel, 'id'>): Observable<FormModel> {
    return this._httpClient.post<FormModel>('https://fakestoreapi.com/products', form);
  }
}
