import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TeamsService } from 'src/app/services/teams/teams.service';
import { Team } from 'src/app/entities/team';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any[];
  team: Team;
  @ViewChild('input_name') teamNameInput: ElementRef;

  constructor(private _teamsService: TeamsService) { }

  ngOnInit() {
    this.team = new Team();
    this.teams = new Array<Team>();
    this.load();
  }

  load() {
    this._teamsService.list().subscribe(result => (this.teams = result));
  }

  add() {

    if (this.team.name) {
      // const tempTeam = new Team();
      // tempTeam.name = this.team.name;

      // save on at DB
      this._teamsService.add(this.team).then(result => {
        if (result) {
          console.log(result.id);
          this.team.name = '';

          setTimeout(() => {
            this.teamNameInput.nativeElement.focus();
          }, 100);

        } else {
          alert('Erro ao incluir time');
        }
      });
    }
  }
}
