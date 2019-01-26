import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TypeService } from 'src/app/services/type.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  private displayedColumns: string[] = ['Id', 'Name', 'Description', 'P2P Play Count', 'Is Continuous'];
  private dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private typeService: TypeService) {

  }

  ngOnInit() {
    this.typeService.GetTypes().subscribe(types => {
      this.dataSource = new MatTableDataSource(types);
    })
  }

}
