import { Component, OnInit, EventEmitter } from '@angular/core';
import { LeagueService } from 'src/app/SERVICES/league.service';
import { LeagueModel } from 'src/app/MODELS/league/league.model';
import { TableHeaderActionModel } from 'src/app/MODELS/COMMON/table-header-action.model';
import { TableColumnModel } from 'src/app/MODELS/COMMON/table-column.model';
import { MatDialog } from '@angular/material';
import { LeagueModalComponent } from './league-modal/league-modal.component';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css']
})
export class LeaguesComponent implements OnInit {
  actions: TableHeaderActionModel[] = [
    { name: "Add", icon: "add_circle", action: new EventEmitter() },
    { name: "Edit", icon: "create", action: new EventEmitter<LeagueModel>(), mustSelect: true },
    { name: "Delete", icon: "remove_circle", action: new EventEmitter<LeagueModel>(), mustSelect: true, mustConfirm: true },
    { name: "Add Player", icon: "person_add", action: new EventEmitter<LeagueModel>(), mustSelect: true },
    { name: "Show Matches", icon: "view_headline", action: new EventEmitter<LeagueModel>(), mustSelect: true },
    { name: "Show Standing", icon: "grid_on", action: new EventEmitter<LeagueModel>(), mustSelect: true }
  ]
  columns: TableColumnModel[] = [
    { caption: "Title", dataMember: "title" },
    { caption: "Iteration", dataMember: "iteration" },
    { caption: "Player Count", dataMember: "playerCount" },
    { caption: "Type", dataMember: "typeName" },
    { caption: "Start Date", dataMember: "startDatePersian" },
    { caption: "End Date", dataMember: "endDatePersian" },
    { caption: "Is Completed", dataMember: "isCompleted" },
    { caption: "Winner", dataMember: "winnerPlayerFullName" },
  ]

  leagues: LeagueModel[] = [];

  constructor(
    private dialog: MatDialog,
    private leagueService: LeagueService
  ) { }

  ngOnInit() {
    this.fetchData();

    this.actions[0].action.subscribe(() => {
      this.newLeague();
    })
    this.actions[1].action.subscribe(league => {
      this.editLeague(league);
    })
    this.actions[2].action.subscribe(league => {
      this.deleteLeague(league);
    })
    this.actions[3].action.subscribe(league => {
      this.addPlayerToLeague();
    })
    this.actions[4].action.subscribe(league => {
      this.showMatches();
    })
    this.actions[5].action.subscribe(league => {
      this.getLeagueRank();
    })
  }

  private fetchData(): void {
    this.leagueService.GetLeagues().subscribe(leagues => {
      this.leagues = leagues;
    })
  }

  private newLeague() {
    this.dialog.open(LeagueModalComponent, {
      autoFocus: true,
      data: new LeagueModel
    })
      .afterClosed().subscribe(result => {
        if (result)
          this.fetchData();
      });
  }

  private editLeague(league: LeagueModel) {
    this.dialog.open(LeagueModalComponent, {
      autoFocus: true,
      data: league
    })
      .afterClosed().subscribe(result => {
        if (result)
          this.fetchData();
      });
  }

  private deleteLeague(league: LeagueModel) {
    this.leagueService.DeleteLeague(league.id).subscribe(() => {
      this.fetchData();
    })
  }

  private addPlayerToLeague() {

  }


  private showMatches() {

  }

  private getLeagueRank() {
  }
}
