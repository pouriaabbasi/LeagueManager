import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { LeagueModel } from '../MODELS/league/league.model';
import { UpdateLeagueModel } from '../MODELS/league/update-league.model';
import { AddLeagueModel } from '../MODELS/league/add-league.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(
    private baseService: BaseService
  ) { }

  public GetLeagues(): Observable<LeagueModel[]> {
    return this.baseService.Get<LeagueModel[]>("League/GetLeagues");
  }

  public UpdateLeague(leagueId: number, model: UpdateLeagueModel): Observable<LeagueModel> {
    return this.baseService.Put<LeagueModel>("League/UpdateLeague/" + leagueId, model);
  }

  public DeleteLeague(leagueId: number): Observable<boolean> {
    return this.baseService.Delete<boolean>("League/DeleteLeague/" + leagueId);
  }

  public AddLeague(model: AddLeagueModel): Observable<LeagueModel> {
    return this.baseService.Post<LeagueModel>("League/AddLeague", model);
  }
}