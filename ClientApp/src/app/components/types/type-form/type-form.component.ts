import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddTypeModel } from 'src/app/models/addType.model';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TypeFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AddTypeModel) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
