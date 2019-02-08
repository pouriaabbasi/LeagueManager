import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { AddPlayerModel } from '../MODELS/player/add-player.model';
import { Observable } from 'rxjs';
import { PlayerModel } from '../MODELS/player/player.model';
import { UpdatePlayerModel } from '../MODELS/player/update-player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private baseService: BaseService
  ) { }

  public GetPlayers(): Observable<PlayerModel[]> {
    return this.baseService.Get<PlayerModel[]>("Player/GetPlayers");
  }

  public GetPlayer(playerId: number): Observable<PlayerModel> {
    return this.baseService.Get<PlayerModel>("Player/GetPlayer/" + playerId)
  }

  public AddPlayer(model: AddPlayerModel): Observable<PlayerModel> {
    return this.baseService.Post<PlayerModel>("Player/AddPlayer", model);
  }

  public UpdatePlayer(playerId: number, model: UpdatePlayerModel): Observable<PlayerModel> {
    return this.baseService.Put<PlayerModel>("Player/UpdatePlayer/" + playerId, model);
  }

  public DeletePlayer(playerId: number): Observable<boolean> {
    return this.baseService.Delete<boolean>("Player/DeletePlayer/" + playerId);
  }
}
