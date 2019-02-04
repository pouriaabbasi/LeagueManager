import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TypeService } from 'src/app/SERVICES/type.service';
import { TypeModel } from 'src/app/MODELS/type.model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  private displayedColumns: string[] = ['id', 'name', 'description', 'p2PPlayCount', 'isContinuous', 'actions'];
  private dataSource = new MatTableDataSource();
  private types: TypeModel[] = [];

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

}
