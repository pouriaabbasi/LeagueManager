import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/SERVICES/league.service';
import { LeagueModel } from 'src/app/MODELS/league/league.model';
import { TypeModel } from 'src/app/MODELS/type/type.model';
import { TypeService } from 'src/app/SERVICES/type.service';
import { UpdateLeagueModel } from 'src/app/MODELS/league/update-league.model';
import { AddLeagueModel } from 'src/app/MODELS/league/add-league.model';
import { AddPlayerToLeagueModel } from 'src/app/MODELS/league/add-player-to-league.model';
import { PlayerModel } from 'src/app/MODELS/player/player.model';
import { PlayerService } from 'src/app/SERVICES/player.service';
import { LeagueMatchModel } from 'src/app/MODELS/league/league-match.model';
import { SetMatchResultModel } from 'src/app/MODELS/league/set-match-result.model';
import { LeagueRankModel } from 'src/app/MODELS/league/league-rank.model';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: LeagueModel[] = [];
  types: TypeModel[] = [];
  players: PlayerModel[] = [];
  league: LeagueModel;
  addPlayer: AddPlayerToLeagueModel;
  matches: LeagueMatchModel[];
  matchResult: SetMatchResultModel;
  leagueRanks: LeagueRankModel[];

  constructor(
    private leagueService: LeagueService,
    private typeService: TypeService,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.refreshGrid();
    this.fillTypes();
    this.fillPlayers();
  }

  private refreshGrid(): void {
    this.leagueService.GetLeagues().subscribe(leagues => {
      this.leagues = leagues;
    })
  }

  private fillTypes() {
    this.typeService.GetTypes().subscribe(types => {
      this.types = types;
    });
  }

  private fillPlayers() {
    this.playerService.GetPlayers().subscribe(players => {
      this.players = players;
    })
  }

  private selectLeague(league: LeagueModel) {
    this.league = league;

    this.matches = null;
    this.matchResult = null;
    this.leagueRanks = null;
    this.addPlayer = null;
  }

  private newLeague() {
    this.league = new LeagueModel();

    this.matches = null;
    this.matchResult = null;
    this.leagueRanks = null;
    this.addPlayer = null;
  }

  private deleteLeague(league: LeagueModel) {
    if (confirm("Are you sure?")) {
      this.leagueService.DeleteLeague(league.id).subscribe(() => {
        this.refreshGrid();
      })
    }
  }

  private submitLeague() {
    if (this.league) {
      if (this.league.id) {
        var updateLeagueModel = new UpdateLeagueModel();
        updateLeagueModel.title = this.league.title;
        updateLeagueModel.typeId = this.league.typeId;
        updateLeagueModel.iteration = this.league.iteration;
        updateLeagueModel.startDate = this.league.startDate;
        updateLeagueModel.endDate = this.league.endDate;
        updateLeagueModel.isCompleted = this.league.isCompleted;
        this.leagueService.UpdateLeague(this.league.id, updateLeagueModel).subscribe(league => {
          this.league = null;
          this.refreshGrid();
        })
      }
      else {
        var addLeagueModel = new AddLeagueModel();
        addLeagueModel.title = this.league.title;
        addLeagueModel.typeId = this.league.typeId;
        addLeagueModel.iteration = this.league.iteration;
        addLeagueModel.startDate = this.league.startDate;
        addLeagueModel.endDate = this.league.endDate;
        addLeagueModel.isCompleted = this.league.isCompleted;
        this.leagueService.AddLeague(addLeagueModel).subscribe(league => {
          this.league = null;
          this.leagues.push(league);
        })
      }
    }
  }

  private addPlayerToLeague(league: LeagueModel) {
    this.addPlayer = new AddPlayerToLeagueModel();
    this.addPlayer.leagueId = league.id;

    this.matches = null;
    this.matchResult = null;
    this.leagueRanks = null;
    this.league = null;
  }

  private submitAddPlayer() {
    this.leagueService.AddPlayerToLeague(this.addPlayer).subscribe(() => {
      this.addPlayer = null;
      this.refreshGrid();
    })
  }

  private showMatches(leagueId: number) {
    this.leagueService.ShowMatches(leagueId).subscribe(matches => {
      this.matches = matches;

      this.addPlayer = null;
      this.matchResult = null;
      this.leagueRanks = null;
      this.league = null;
    })
  }

  private getLeagueRank(leagueId) {
    this.leagueService.GetLeagueRank(leagueId).subscribe(leagueRanks => {
      this.leagueRanks = leagueRanks;

      this.matches = null;
      this.matchResult = null;
      this.league = null;
      this.addPlayer = null;
    })
  }
}
