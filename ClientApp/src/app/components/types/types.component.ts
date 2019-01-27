import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TypeService } from 'src/app/services/type.service';
import { TypeFormComponent } from './type-form/type-form.component';
import { AddTypeModel } from 'src/app/models/addType.model';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  private displayedColumns: string[] = ['Id', 'Name', 'Description', 'P2P Play Count', 'Is Continuous'];
  private dataSource = new MatTableDataSource();
  addType: AddTypeModel;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public dialog: MatDialog,
    private typeService: TypeService) {

  }

  ngOnInit() {
    this.refreshGrid();
  }

  private refreshGrid() {
    this.typeService.GetTypes().subscribe(types => {
      this.dataSource = new MatTableDataSource(types);
    })
  }

  openDialog(): void {
    this.addType = new AddTypeModel();
    const dialogRef = this.dialog.open(TypeFormComponent, {
      width: '250px',
      data: this.addType
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addType = result;
      this.typeService.AddType(this.addType).subscribe(x => {
        this.refreshGrid();
      });
    });
  }

}
