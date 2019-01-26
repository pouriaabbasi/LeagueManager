import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatTableModule, MatInputModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BaseService } from './services/base.service';
import { TypeService } from './services/type.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TypesComponent } from './components/types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    TypesComponent
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
    NgbModule
  ],
  providers: [
    BaseService,
    TypeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
