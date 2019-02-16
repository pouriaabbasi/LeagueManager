import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TypeService } from 'src/app/SERVICES/type.service';
import { TypeModel } from 'src/app/MODELS/type/type.model';
import { TableHeaderActionModel } from 'src/app/MODELS/COMMON/table-header-action.model';
import { TableColumnModel } from 'src/app/MODELS/COMMON/table-column.model';
import { TypeModalComponent } from './type-modal/type-modal.component';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  actions: TableHeaderActionModel[] = [
    { name: "Add", icon: "add_circle", action: new EventEmitter() },
    { name: "Edit", icon: "create", action: new EventEmitter<TypeModel>(), mustSelect: true },
    { name: "Delete", icon: "remove_circle", action: new EventEmitter<TypeModel>(), mustSelect: true, mustConfirm: true }
  ]
  columns: TableColumnModel[] = [
    { caption: "Name", dataMember: "name" },
    { caption: "Description", dataMember: "description" },
    { caption: "P2P Play Count", dataMember: "p2PPlayCount" },
    { caption: "Is Continuous", dataMember: "isContinuous" },
  ]

  types: TypeModel[] = [];
  private type: TypeModel = null;

  constructor(
    private typeService: TypeService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.fetchData();
    this.actions[0].action.subscribe(() => {
      this.newType();
    })
    this.actions[1].action.subscribe(type => {
      this.editType(type);
    })
    this.actions[2].action.subscribe(type => {
      this.deleteType(type);
    })
  }

  private fetchData() {
    this.typeService.GetTypes().subscribe(types => {
      this.types = types;
    })
  }

  private newType() {
    const dialogRef = this.dialog.open(TypeModalComponent, {
      autoFocus: true,
      data: new TypeModel()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.fetchData();
    })
  }

  private editType(type: TypeModel) {
    const dialogRef = this.dialog.open(TypeModalComponent, {
      autoFocus: true,
      data: type
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.fetchData();
    })
  }

  private deleteType(type: TypeModel) {
    this.typeService.DeleteType(type.id).subscribe(() => {
      this.fetchData();
    })
  }
}
