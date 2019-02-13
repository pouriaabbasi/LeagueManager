import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LeagueMatchModel } from 'src/app/MODELS/league/league-match.model';
import { SetMatchResultModel } from 'src/app/MODELS/league/set-match-result.model';
import { LeagueService } from 'src/app/SERVICES/league.service';

@Component({
  selector: 'app-league-matches',
  templateUrl: './league-matches.component.html',
  styleUrls: ['./league-matches.component.css']
})
export class LeagueMatchesComponent implements OnInit {

  @Input() matches: LeagueMatchModel[];

  @Output() showMatches: EventEmitter<number> = new EventEmitter();

  matchResult: SetMatchResultModel;

  constructor(
    private leagueService: LeagueService
  ) { }

  ngOnInit() {
  }

  private setMatchResult(match: LeagueMatchModel) {
    this.matchResult = new SetMatchResultModel();
    this.matchResult.leagueId = match.leagueId;
    this.matchResult.leagueMatchId = match.leagueMatchId;
  }

  private setResult() {
    this.leagueService.SetMatchResult(this.matchResult).subscribe(result => {
      if (result) {
        this.showMatches.next(this.matchResult.leagueId);
        this.matchResult = null;
      }
    });
  }

}
