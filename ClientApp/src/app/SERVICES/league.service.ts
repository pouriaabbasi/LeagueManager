import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { LeagueModel } from '../MODELS/league/league.model';
import { UpdateLeagueModel } from '../MODELS/league/update-league.model';
import { AddLeagueModel } from '../MODELS/league/add-league.model';
import { AddPlayerToLeagueModel } from '../MODELS/league/add-player-to-league.model';
import { LeagueMatchModel } from '../MODELS/league/league-match.model';
import { SetMatchResultModel } from '../MODELS/league/set-match-result.model';

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

  public AddPlayerToLeague(model: AddPlayerToLeagueModel): Observable<boolean> {
    return this.baseService.Post<boolean>("League/AddPlayerToLeague", model);
  }

  public ShowMatches(leagueId: number): Observable<LeagueMatchModel[]> {
    return this.baseService.Get<LeagueMatchModel[]>("League/ShowMatches/" + leagueId);
  }

  public SetMatchResult(model: SetMatchResultModel): Observable<boolean> {
    return this.baseService.Put<boolean>("League/SetMatchResult/" + model.leagueMatchId, model);
  }
}
