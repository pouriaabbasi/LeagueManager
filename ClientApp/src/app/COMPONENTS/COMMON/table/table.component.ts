import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TableHeaderActionModel } from 'src/app/MODELS/COMMON/table-header-action.model';
import { MatTableDataSource, MatSnackBar, MatDialog } from '@angular/material';
import { TableColumnModel } from 'src/app/MODELS/COMMON/table-column.model';
import { SelectionModel } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() title: string;
  @Input() actions: TableHeaderActionModel[];
  @Input() columns: TableColumnModel[];
  @Input()
  set data(value: any) {
    this._data.next(value);
  }
  get data(): any {
    return this._data.getValue();
  }

  private _data = new BehaviorSubject<any>([]);
  private _displayedColumns: string[];
  get displayedColumns(): string[] {
    if (this._displayedColumns)
      return this._displayedColumns;
    this._displayedColumns = [];
    this._displayedColumns.push("select");
    this.columns.forEach(column => {
      this._displayedColumns.push(column.dataMember);
    });
  }
  private dataSource = new MatTableDataSource(this.data);
  private selection = new SelectionModel<any>(false, []);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data);
    }
  }

  constructor(
    private snakBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this._data.subscribe(x => {
      this.dataSource = new MatTableDataSource(this.data);
    })
  }

  private getValue(element: any, dataMember: string) {
    return element[dataMember];
  }

  private doAction(actionName: string) {
    var headerAction = this.actions.find(x => x.name == actionName);
    if (!headerAction || !headerAction.action)
      return;

    if (headerAction.mustSelect)
      if (!this.selection.selected.length) {
        this.snakBar.open("Select a row first!", null, {
          duration: 2500,
          horizontalPosition: "center",
          verticalPosition: "top",
          announcementMessage: "Test"
        })
        return;
      }

    if (headerAction.mustConfirm) {
      this.dialog.open(ConfirmComponent, {
        disableClose: true,
      }).afterClosed().subscribe(result => {
        if (result)
          headerAction.action.next(headerAction.mustSelect ? this.selection.selected[0] : null);
      })
    }
    else
      headerAction.action.next(headerAction.mustSelect ? this.selection.selected[0] : null);
  }
}
