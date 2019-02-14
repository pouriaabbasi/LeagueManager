import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { TypeService } from 'src/app/SERVICES/type.service';
import { TypeModel } from 'src/app/MODELS/type/type.model';
import { UpdateTypeModel } from 'src/app/MODELS/type/update-type.model';
import { AddTypeModel } from 'src/app/MODELS/type/add-type.model';
import { SelectionModel } from '@angular/cdk/collections';
import { TableHeaderActionModel } from 'src/app/MODELS/COMMON/table-header-action.model';
import { TableColumnModel } from 'src/app/MODELS/COMMON/table-column.model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  actions: TableHeaderActionModel[] = [
    { name: "Add", icon: "add_circle", action: new EventEmitter() },
    { name: "Edit", icon: "create", action: new EventEmitter<TypeModel>(), mustSelect: true },
    { name: "Delete", icon: "remove_circle", action: new EventEmitter<TypeModel>(), mustSelect: true }
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
    private snackBar: MatSnackBar,
    private typeService: TypeService
  ) { }

  ngOnInit() {
    this.fetchDate();
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

  private fetchDate() {
    this.typeService.GetTypes().subscribe(types => {
      this.types = types;
    })
  }

  private newType() {
    console.log("call new type");
  }

  private editType(type: TypeModel) {
    console.log("call edit type", type);
  }

  private deleteType(type: TypeModel) {
    console.log("call delete type", type);
  }

  private submit() {
    if (this.type) {
      if (this.type.id) {
        var updateTypeModel = new UpdateTypeModel();
        updateTypeModel.name = this.type.name;
        updateTypeModel.description = this.type.description;
        updateTypeModel.isContinuous = this.type.isContinuous;
        updateTypeModel.p2PPlayCount = this.type.p2PPlayCount;
        this.typeService.UpdateType(this.type.id, updateTypeModel).subscribe(type => {
          this.type = null;
          // this.refreshGrid();
        })
      }
      if (!this.type.id) {
        var addTypeModel = new AddTypeModel();
        addTypeModel.name = this.type.name;
        addTypeModel.description = this.type.description;
        addTypeModel.isContinuous = this.type.isContinuous;
        addTypeModel.p2PPlayCount = this.type.p2PPlayCount;
        this.typeService.AddType(addTypeModel).subscribe(type => {
          this.type = null;
          // this.types.push(type);
        })
      }
    }
  }
}
