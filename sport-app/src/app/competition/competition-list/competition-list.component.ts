import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CompetitionService} from "../competition.service";
import {Competition} from "../competition";
import {OrganizerService} from "../../organizer/organizer.service";
import {Organizer} from "../../organizer/organizer";
import {SportKind} from "../../sport-kind/sportKind";
import {SportKindService} from "../../sport-kind/sport-kind.service";
import {Sportsman} from "../../sportsman/sportsman";
import {SportsmanService} from "../../sportsman/sportsman.service";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css'],
  providers: [CompetitionService, OrganizerService, SportKindService, SportsmanService]
})
export class CompetitionListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedCompetition: Competition;
  competitions: Array<Competition>;
  organizers: Array<Organizer>;
  sportKinds: Array<SportKind>;
  sportsmen: Array<Sportsman>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: CompetitionService,
              private serv: OrganizerService,
              private servi: SportKindService,
              private sportsmanService: SportsmanService) {
    this.competitions = new Array<Competition>();
    this.organizers = new Array<Organizer>();
    this.sportKinds = new Array<SportKind>();
    this.sportsmen = new Array<Sportsman>();
  }

  ngOnInit() {
    this.loadCompetitions();
  }

  private loadCompetitions() {
    this.service.getCompetitions().subscribe((data: Competition[])=> {
      this.competitions = data;
    });

    this.serv.getOrganizers().subscribe((data: Organizer[])=> {
      this.organizers = data;
    });

    this.servi.getSportKinds().subscribe((data: SportKind[]) => {
      this.sportKinds = data;
    });

    this.sportsmanService.getSportsmen().subscribe((data: Sportsman[]) => {
      this.sportsmen = data;
    });
  }

  addCompetition() {
    this.editedCompetition = new Competition(0,null,null,null, null, null, null);
    this.competitions.push(this.editedCompetition);
    this.isNewRecord = true;
  }

  editCompetition(competition: Competition) {
    this.editedCompetition = new Competition(competition.competitionId, competition.name, competition.startDate, competition.finishDate, competition.organizer, competition.sportKind, competition.sportsmen);
  }

  loadTemplate(competition: Competition) {
    if (this.editedCompetition && this.editedCompetition.competitionId == competition.competitionId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveCompetition() {
    if (this.isNewRecord) {
      this.service.createCompetition(this.editedCompetition).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлено',
          this.loadCompetitions();
      });
      this.isNewRecord = false;
      this.editedCompetition = null;
    } else {
      this.service.updateCompetition(this.editedCompetition.competitionId, this.editedCompetition).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadCompetitions();
      });
      this.editedCompetition = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.competitions.pop();
      this.isNewRecord = false;
    }
    this.editedCompetition = null;
  }

  deleteCompetition(competition: Competition) {
    this.service.deleteCompetition(competition.competitionId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено',
        this.loadCompetitions();
    });
  }
}
