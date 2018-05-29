import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SportClubService} from '../sport-club.service';
import {SportClub} from '../sportClub';
import 'rxjs/Rx';


@Component({
  selector: 'app-sport-club-list',
  templateUrl: './sport-club-list.component.html',
  styleUrls: ['./sport-club-list.component.css'],
  providers: [SportClubService]
})
export class SportClubListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedSportClub: SportClub;
  sportClubs: Array<SportClub>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: SportClubService) {
    this.sportClubs = new Array<SportClub>();
  }

  ngOnInit() {
    this.loadSportClub();
  }

  private loadSportClub() {
    this.service.getSportClubs().subscribe((data: SportClub[]) => {
      this.sportClubs = data;
    });
  }

  addSportClub() {
    this.editedSportClub = new SportClub(0, null, null);
    this.sportClubs.push(this.editedSportClub);
    this.isNewRecord = true;
  }

  editSportClub(sportClub: SportClub) {
    this.editedSportClub = new SportClub(sportClub.sportClubId, sportClub.name, sportClub.foundationDate);
  }

  loadTemplate(sportClub: SportClub) {
    if (this.editedSportClub && this.editedSportClub.sportClubId == sportClub.sportClubId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveSportClub() {
    if (this.isNewRecord) {
      this.service.createSportClub(this.editedSportClub).subscribe(data => {
        this.statusMessage = 'Дані успішно добалені',
          this.loadSportClub();
      });
      this.isNewRecord = false;
      this.editedSportClub = null;
    } else {
      this.service.updateSportClub(this.editedSportClub.sportClubId, this.editedSportClub).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadSportClub();
      });
      this.editedSportClub = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.sportClubs.pop();
      this.isNewRecord = false;
    }
    this.editedSportClub = null;
  }

  deleteSportClub(sportClub: SportClub) {
    this.service.deleteSportClub(sportClub.sportClubId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалені',
        this.loadSportClub();
    });
  }
}
