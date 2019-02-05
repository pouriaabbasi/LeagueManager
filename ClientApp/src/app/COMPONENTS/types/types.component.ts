import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TypeService } from 'src/app/SERVICES/type.service';
import { TypeModel } from 'src/app/MODELS/type/type.model';
import { UpdateTypeModel } from 'src/app/MODELS/type/update-type.model';
import { AddTypeModel } from 'src/app/MODELS/type/add-type.model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  // private displayedColumns: string[] = ['id', 'name', 'description', 'p2PPlayCount', 'isContinuous', 'actions'];
  // private dataSource = new MatTableDataSource();
  private types: TypeModel[] = [];
  private type: TypeModel = null;

  constructor(
    private typeService: TypeService
  ) { }

  ngOnInit() {
    this.refreshGrid();
  }

  // private refreshGrid() {
  //   this.typeService.GetTypes().subscribe(types => {
  //     this.dataSource = new MatTableDataSource(types);
  //   })
  // }

  private refreshGrid() {
    this.typeService.GetTypes().subscribe(types => {
      this.types = types;
    })
  }

  private selectType(type: TypeModel) {
    this.type = type;
  }

  private newType() {
    this.type = new TypeModel();
  }

  private submit() {
    debugger;
    if (this.type) {
      if (this.type.id) {
        var updateTypeModel = new UpdateTypeModel();
        updateTypeModel.name = this.type.name;
        updateTypeModel.description = this.type.description;
        updateTypeModel.isContinuous = this.type.isContinuous;
        updateTypeModel.p2PPlayCount = this.type.p2PPlayCount;
        this.typeService.UpdateType(this.type.id, updateTypeModel).subscribe(type => {
          this.type = null;
          this.refreshGrid();
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
          this.types.push(type);
        })
      }
    }
  }

  private deleteType(type: TypeModel) {
    if (confirm("Are U Sure !?")) {
      this.typeService.DeleteType(type.id).subscribe(() => {
        this.refreshGrid();
      })
    }
  }

}
