import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Team } from 'src/app/entities/team';
import { Observable } from 'rxjs';
import { TournamentService } from 'src/app/services/tournament/tournament.service';
import { Tournament } from 'src/app/entities/tournament';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournament: Tournament;
  isRoundrobin: boolean;
  @ViewChild('input_name') tournamentNameInput: ElementRef;

  constructor(private _tournamentService: TournamentService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit() {
    this.tournament = new Tournament();
    // this._activatedRoute.queryParams.subscribe((params: Params) => {
    //   //this.eventId = params['id'];
    // });
  }

  generate(){
    const created = this._tournamentService.create(this.tournament);
    if(created){
      this._router.navigate(['tournament-list']);
      // this._router.navigate(['tournament_details'], {
      //   queryParams: { eventId: this.eventId, first: this.first }
      // });
    }
  }

}
