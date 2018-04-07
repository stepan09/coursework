import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CompetitionService} from "../competition.service";
import {Competition} from "../competition";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css'],
  providers: [CompetitionService]
})
export class CompetitionListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedCompetition: Competition;
  competitions: Array<Competition>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: CompetitionService) {
    this.competitions = new Array<Competition>();
  }

  ngOnInit() {
    this.loadCompetitions();
  }

  private loadCompetitions() {
    this.service.getCompetitions().subscribe((data: Competition[])=> {
      this.competitions = data;
    });
  }

  addCompetition() {
    this.editedCompetition = new Competition(0,null,null,null);
    this.competitions.push(this.editedCompetition);
    this.isNewRecord = true;
  }

  editCompetition(competition: Competition) {
    this.editedCompetition = new Competition(competition.competitionId, competition.name, competition.startDate, competition.finishDate);
  }

  loadTemplate(competition: Competition) {
    if (this.editedCompetition && this.editedCompetition.competitionId == competition.competitionId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveCompetition(competition: Competition) {
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
