import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatDialogModule,
  MatDatepickerModule,
  MatTabsModule

} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamsComponent } from './components/teams/teams.component';
import { RepositoryService } from './services/database/repository.service';
import { TeamsService } from './services/teams/teams.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentDetailsComponent } from './components/tournament-details/tournament-details.component';
import { TableComponent } from './components/table/table.component';
import { RoundsComponent } from './components/rounds/rounds.component';
import { AddScoresComponent } from './components/add-scores/add-scores.component';
import { ModealComponent } from './components/modal/modeal/modeal.component';
import { TournamentService } from 'src/app/services/tournament/tournament.service';
import { RoundService } from './services/round/round.service';
import { TableService } from './services/table/table.service';
import { MatchService } from './services/match/match.service';
import { BaseService } from './services/base/base.service';
import { TournamentListComponent } from './components/tournament-list/tournament-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TournamentComponent,
    TournamentDetailsComponent,
    TableComponent,
    RoundsComponent,
    AddScoresComponent,
    ModealComponent,
    TournamentListComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule, NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, environment.firebase.projectId), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTabsModule
  ],
  providers: [
    RepositoryService,
    TeamsService,
    TournamentService,
    RoundService,
    TableService,
    MatchService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
