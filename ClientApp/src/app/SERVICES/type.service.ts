import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { TypeModel } from '../MODELS/type/type.model';
import { AddTypeModel } from '../MODELS/type/add-type.model';
import { UpdateTypeModel } from '../MODELS/type/update-type.model';

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

  public GetType(id: number): Observable<TypeModel> {
    return this.baseService.Get<TypeModel>("Type/GetType/" + id);
  }

  public AddType(model: AddTypeModel): Observable<TypeModel> {
    return this.baseService.Post<TypeModel>("Type/AddType", model);
  }

  public UpdateType(id: number, model: UpdateTypeModel): Observable<TypeModel> {
    return this.baseService.Put<TypeModel>("Type/UpdateType/" + id, model);
  }

  public DeleteType(id: number): Observable<boolean> {
    return this.baseService.Delete<boolean>("Type/DeleteType/" + id);
  }
}
