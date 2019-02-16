import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
  ) { }

  ngOnInit() {
  }

  Yes(): void {
    this.dialogRef.close(true);
  }

  No(): void {
    this.dialogRef.close(false);
  }

}
