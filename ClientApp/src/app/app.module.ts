import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialog, MatDialogModule, MatSlideToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ChartModule } from 'angular2-chartjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TablelistComponent } from './tablelist/tablelist.component';
import { TypoComponent } from './typo/typo.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { AgmCoreModule } from '@agm/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TypesComponent } from './COMPONENTS/types/types.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeModalComponent } from './COMPONENTS/types/type-modal/type-modal.component';
import { LeaguesComponent } from './COMPONENTS/leagues/leagues.component';
import { LeagueMatchesComponent } from './COMPONENTS/leagues/league-matches/league-matches.component';
import { LeagueRankComponent } from './COMPONENTS/leagues/league-rank/league-rank.component';
import { TableComponent } from './COMPONENTS/COMMON/table/table.component';
import { ConfirmComponent } from './COMPONENTS/COMMON/confirm/confirm.component';
import { PlayerModalComponent } from './COMPONENTS/players/player-modal/player-modal.component';
import { PlayersComponent } from './COMPONENTS/players/players.component';
import { LeagueModalComponent } from './COMPONENTS/leagues/league-modal/league-modal.component';

@NgModule({
  declarations: [
    AppComponent,

    SidenavComponent,
    DashboardComponent,

    UserprofileComponent,
    TablelistComponent,
    TypoComponent,
    IconsComponent,
    MapsComponent,
    NotificationComponent,

    TableComponent,
    ConfirmComponent,

    TypesComponent,
    TypeModalComponent,

    PlayersComponent,
    PlayerModalComponent,

    LeaguesComponent,
    LeagueMatchesComponent,
    LeagueRankComponent,
    LeagueModalComponent,
  ],
  imports: [
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAP_API_KEY'
    }),
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatCheckboxModule,
    ChartModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'types',
        component: TypesComponent
      },
      {
        path: 'leagues',
        component: LeaguesComponent
      },
      {
        path: 'players',
        component: PlayersComponent
      },
      //---------------------------------
      {
        path: 'user',
        component: UserprofileComponent
      },
      {
        path: 'table',
        component: TablelistComponent
      },
      {
        path: 'typo',
        component: TypoComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      },
      {
        path: 'maps',
        component: MapsComponent
      },
      {
        path: 'notify',
        component: NotificationComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent,
    TypeModalComponent,
    PlayerModalComponent,
    LeagueModalComponent
  ]
})
export class AppModule { }
