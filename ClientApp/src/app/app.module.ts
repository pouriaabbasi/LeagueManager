import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatTableModule, MatDialogModule, MatInputModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BaseService } from './services/base.service';
import { TypeService } from './services/type.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypesComponent } from './components/types/types.component';
import { TypeFormComponent } from './components/types/type-form/type-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent,
    TypeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    NgbModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [
    BaseService,
    TypeService
  ],
  bootstrap: [AppComponent],
  entryComponents: [TypeFormComponent]
})
export class AppModule { }
