import { Component, OnInit, EventEmitter } from '@angular/core';
import { PlayerService } from 'src/app/SERVICES/player.service';
import { PlayerModel } from 'src/app/MODELS/player/player.model';
import { TableHeaderActionModel } from 'src/app/MODELS/COMMON/table-header-action.model';
import { TableColumnModel } from 'src/app/MODELS/COMMON/table-column.model';
import { MatDialog } from '@angular/material';
import { PlayerModalComponent } from './player-modal/player-modal.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  actions: TableHeaderActionModel[] = [
    { name: "Add", icon: "add_circle", action: new EventEmitter() },
    { name: "Edit", icon: "create", action: new EventEmitter<PlayerModel>(), mustSelect: true },
    { name: "Delete", icon: "remove_circle", action: new EventEmitter<PlayerModel>(), mustSelect: true, mustConfirm: true }
  ]
  columns: TableColumnModel[] = [
    { caption: "First Name", dataMember: "firstName" },
    { caption: "Last Name", dataMember: "lastName" },
  ]

  players: PlayerModel[] = [];

  constructor(
    private playerService: PlayerService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchData();

    this.actions[0].action.subscribe(() => {
      this.newPlayer();
    })
    this.actions[1].action.subscribe(player => {
      this.editPlayer(player);
    })
    this.actions[2].action.subscribe(player => {
      this.deletePlayer(player);
    })
  }

  private fetchData() {
    this.playerService.GetPlayers().subscribe(players => {
      this.players = players;
    })
  }

  private newPlayer() {
    this.dialog.open(PlayerModalComponent, {
      autoFocus: true,
      data: new PlayerModel()
    }).afterClosed().subscribe(result => {
      if (result)
        this.fetchData();
    });
  }

  private editPlayer(player: PlayerModel) {
    this.dialog.open(PlayerModalComponent, {
      autoFocus: true,
      data: player
    }).afterClosed().subscribe(result => {
      if (result)
        this.fetchData();
    });
  }

  private deletePlayer(player: PlayerModel) {
    this.playerService.DeletePlayer(player.id).subscribe(() => {
      this.fetchData();
    })
  }
}
