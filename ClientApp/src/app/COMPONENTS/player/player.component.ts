import { Component, OnInit, EventEmitter } from '@angular/core';
import { PlayerService } from 'src/app/SERVICES/player.service';
import { PlayerModel } from 'src/app/MODELS/player/player.model';
import { AddPlayerModel } from 'src/app/MODELS/player/add-player.model';
import { UpdatePlayerModel } from 'src/app/MODELS/player/update-player.model';
import { TableHeaderActionModel } from 'src/app/MODELS/COMMON/table-header-action.model';
import { TableColumnModel } from 'src/app/MODELS/COMMON/table-column.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  actions: TableHeaderActionModel[] = [
    { name: "Add", icon: "add_circle", action: new EventEmitter() },
    { name: "Edit", icon: "create", action: new EventEmitter<PlayerModel>(), mustSelect: true },
    { name: "Delete", icon: "remove_circle", action: new EventEmitter<PlayerModel>(), mustSelect: true }
  ]
  columns: TableColumnModel[] = [
    { caption: "First Name", dataMember: "firstName" },
    { caption: "Last Name", dataMember: "lastName" },
  ]

  players: PlayerModel[] = [];
  player: PlayerModel;

  constructor(
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.refreshGrid();
  }

  private refreshGrid() {
    this.playerService.GetPlayers().subscribe(players => {
      this.players = players;
    })
  }

  private newPlayer() {
    this.player = new PlayerModel();
  }

  private editPlayer(player: PlayerModel) {
    this.player = player;
  }

  private deletePlayer(player: PlayerModel) {
    if (confirm("Are you sure?")) {
      this.playerService.DeletePlayer(player.id).subscribe(() => {
        this.refreshGrid();
      })
    }
  }

  private submit() {
    if (this.player) {
      if (!this.player.id) {
        var addPlayerModel = new AddPlayerModel();
        addPlayerModel.firstName = this.player.firstName;
        addPlayerModel.lastName = this.player.lastName;
        this.playerService.AddPlayer(addPlayerModel).subscribe(player => {
          this.player = null;
          this.players.push(player);
        })
      }
      else {
        var updatePlayerModel = new UpdatePlayerModel();
        updatePlayerModel.id = this.player.id;
        updatePlayerModel.firstName = this.player.firstName;
        updatePlayerModel.lastName = this.player.lastName;
        this.playerService.UpdatePlayer(this.player.id, updatePlayerModel).subscribe(player => {
          this.player = null;
          this.refreshGrid();
        })
      }
    }
  }

}
