import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SportsmanService} from "../sportsman.service";
import {Sportsman} from "../sportsman";
import {SportKindService} from "../../sport-kind/sport-kind.service";
import {SportKind} from "../../sport-kind/sportKind";
import {SportClubService} from "../../sport-club/sport-club.service";
import {SportClub} from "../../sport-club/sportClub";
import {CoachService} from "../../coach/coach.service";
import {Coach} from "../../coach/coach";

@Component({
  selector: 'app-sportsman-list',
  templateUrl: './sportsman-list.component.html',
  styleUrls: ['./sportsman-list.component.css'],
  providers: [SportsmanService, SportKindService, SportClubService, CoachService]
})
export class SportsmanListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedSportsman: Sportsman;
  sportsmen: Array<Sportsman>;
  sportKinds: Array<SportKind>;
  sportClubs: Array<SportClub>;
  coaches: Array<Coach>;
  searchStr = '';
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private sportsmanService: SportsmanService,
              private sportKindService: SportKindService,
              private sportClubService: SportClubService) {
    this.sportsmen = new Array<Sportsman>();
    this.sportKinds = new Array<SportKind>();
    this.sportClubs = new Array<SportClub>();
  }

  ngOnInit() {
    this.loadSportsmen();
  }

  private loadSportsmen() {
    this.sportsmanService.getSportsmen().subscribe((data: Sportsman[]) => {
      this.sportsmen = data;
    });

    this.sportKindService.getSportKinds().subscribe((data: SportKind[]) => {
      this.sportKinds = data;
    });

    this.sportClubService.getSportClubs().subscribe((data: SportClub[]) => {
      this.sportClubs = data
    });
  }

  addSportsman() {
    this.editedSportsman = new Sportsman(0, null,null,null,null, null, null);
    this.sportsmen.push(this.editedSportsman);
    this.isNewRecord = true;
  }

  editSportsman(sportsman: Sportsman) {
    this.editedSportsman = new Sportsman(sportsman.sportsmanId, sportsman.lastName, sportsman.firstName, sportsman.middleName, sportsman.birthDate, sportsman.sportClub, sportsman.sportKinds);
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
      this.sportsmanService.createSportsman(this.editedSportsman).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлено',
          this.loadSportsmen();
      });
      this.isNewRecord = false;
      this.editedSportsman = null;
    } else {
      this.sportsmanService.updateSportsman(this.editedSportsman.sportsmanId, this.editedSportsman).subscribe(data => {
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
    this.sportsmanService.deleteSportsman(sportsman.sportsmanId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено';
      this.loadSportsmen();
    });
  }
}
