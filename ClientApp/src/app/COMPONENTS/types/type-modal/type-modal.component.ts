import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TypeModel } from 'src/app/MODELS/type/type.model';
import { UpdateTypeModel } from 'src/app/MODELS/type/update-type.model';
import { AddTypeModel } from 'src/app/MODELS/type/add-type.model';
import { TypeService } from 'src/app/SERVICES/type.service';

@Component({
  selector: 'app-type-modal',
  templateUrl: './type-modal.component.html',
  styleUrls: ['./type-modal.component.css']
})
export class TypeModalComponent implements OnInit {

  constructor(
    private typeService: TypeService,
    public dialogRef: MatDialogRef<TypeModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TypeModel
  ) { }

  ngOnInit() {
  }

  private submit() {
    if (this.data) {
      if (this.data.id) {
        var updateTypeModel = new UpdateTypeModel();
        updateTypeModel.name = this.data.name;
        updateTypeModel.description = this.data.description;
        updateTypeModel.isContinuous = this.data.isContinuous;
        updateTypeModel.p2PPlayCount = this.data.p2PPlayCount;
        this.typeService.UpdateType(this.data.id, updateTypeModel).subscribe(type => {
          this.dialogRef.close(true);
        })
      }
      if (!this.data.id) {
        var addTypeModel = new AddTypeModel();
        addTypeModel.name = this.data.name;
        addTypeModel.description = this.data.description;
        addTypeModel.isContinuous = this.data.isContinuous;
        addTypeModel.p2PPlayCount = this.data.p2PPlayCount;
        this.typeService.AddType(addTypeModel).subscribe(type => {
          this.dialogRef.close(true);
        })
      }
    }
  }

  private close() {
    this.dialogRef.close(false);
  }
}
