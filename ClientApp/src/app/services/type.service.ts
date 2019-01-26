import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { TypeModel } from '../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(
    private baseService: BaseService
  ) { }

  public GetTypes(): Observable<Array<TypeModel>> {
    return this.baseService.Get<Array<TypeModel>>("Type/GetTypes");
  }
}
