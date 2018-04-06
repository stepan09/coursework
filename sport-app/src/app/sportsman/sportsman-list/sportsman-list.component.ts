import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SportsmanService} from "../sportsman.service";
import {Sportsman} from "../sportsman";

@Component({
  selector: 'app-sportsman-list',
  templateUrl: './sportsman-list.component.html',
  styleUrls: ['./sportsman-list.component.css'],
  providers: [SportsmanService]
})
export class SportsmanListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedSportsman: Sportsman;
  sportsmen: Array<Sportsman>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: SportsmanService) {
    this.sportsmen = new Array<Sportsman>();
  }

  ngOnInit() {
    this.loadSportsmen();
  }

  private loadSportsmen() {
    this.service.getSportsmen().subscribe((data: Sportsman[]) => {
      this.sportsmen = data;
    });
  }

  addSportsman() {
    this.editedSportsman = new Sportsman(0, null,null,null,null, null);
    this.sportsmen.push(this.editedSportsman);
    this.isNewRecord = true;
  }

  editSportsman(sportsman: Sportsman) {
    this.editedSportsman = new Sportsman(sportsman.sportsmanId, sportsman.lastName, sportsman.firstName, sportsman.middleName, sportsman.birthDate, sportsman.sportClub);
  }

  loadTemplate(sportsman: Sportsman) {
    if (this.editedSportsman && this.editedSportsman.sportsmanId == sportsman.sportsmanId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveSportsman(sportsman: Sportsman) {
    if (this.isNewRecord) {
      this.service.createSportsman(this.editedSportsman).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлено',
          this.loadSportsmen();
      });
      this.isNewRecord = false;
      this.editedSportsman = null;
    } else {
      this.service.updateSportsman(this.editedSportsman.sportsmanId, this.editedSportsman).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadSportsmen();
      });
      this.editedSportsman = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.sportsmen.pop();
      this.isNewRecord = false;
    }
    this.editedSportsman = null;
  }

  deleteSportsman(sportsman: Sportsman) {
    this.service.deleteSportsman(sportsman.sportsmanId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено';
      this.loadSportsmen();
    });
  }
}
