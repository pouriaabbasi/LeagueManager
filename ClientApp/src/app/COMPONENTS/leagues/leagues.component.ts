import { Component, OnInit } from '@angular/core';
import { LeagueService } from 'src/app/SERVICES/league.service';
import { LeagueModel } from 'src/app/MODELS/league/league.model';
import { TypeModel } from 'src/app/MODELS/type/type.model';
import { TypeService } from 'src/app/SERVICES/type.service';
import { UpdateLeagueModel } from 'src/app/MODELS/league/update-league.model';
import { AddLeagueModel } from 'src/app/MODELS/league/add-league.model';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {

  leagues: LeagueModel[] = [];
  types: TypeModel[] = [];
  league: LeagueModel;
  addPlayer: LeagueModel;

  constructor(
    private leagueService: LeagueService,
    private typeService: TypeService
  ) { }

  ngOnInit() {
    this.refreshGrid();
    this.fillTypes();
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

  private selectLeague(league: LeagueModel) {
    this.league = league;
  }

  private newLeague() {
    this.league = new LeagueModel();
  }

  private deleteLeague(league: LeagueModel) {
    if (confirm("Are you sure?")) {
      this.leagueService.DeleteLeague(league.id).subscribe(() => {
        this.refreshGrid();
      })
    }
  }

  private submit() {
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
    this.addPlayer = league;
  }
}
