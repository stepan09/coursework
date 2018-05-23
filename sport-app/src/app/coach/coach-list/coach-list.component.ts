import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CoachService} from "../coach.service";
import {Coach} from "../coach";
import {Sportsman} from "../../sportsman/sportsman";
import {SportsmanService} from "../../sportsman/sportsman.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css'],
  providers: [CoachService, SportsmanService]
})
export class CoachListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedCoach: Coach;
  coaches: Array<Coach>;
  sportsmen: Array<Sportsman>;
  searchStr = '';
  isNewRecord: boolean;
  statusMessage: string;


  constructor(private service: CoachService, private serv: SportsmanService) {
    this.coaches = new Array<Coach>();
    this.sportsmen = new Array<Sportsman>();
  }

  ngOnInit() {
    this.loadCoaches();
  }

  private loadCoaches() {
    this.service.getCoaches().subscribe((data: Coach[]) => {
      this.coaches = data;
    });

    this.serv.getSportsmen().subscribe((data: Sportsman[]) => {
      this.sportsmen = data;
    })
  }

  addCoach() {
    this.editedCoach = new Coach(0, null,null,null,null, null);
    this.coaches.push(this.editedCoach);
    this.isNewRecord = true;
  }

  editCoach(coach: Coach) {
    this.editedCoach = new Coach(coach.coachId, coach.lastName, coach.firstName, coach.middleName, coach.birthDate, coach.sportsmen);
  }

  loadTemplate(coach: Coach) {
    if (this.editedCoach && this.editedCoach.coachId == coach.coachId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveCoach(coach: Coach) {
    if (this.isNewRecord) {
      this.service.createCoach(this.editedCoach).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлено',
          this.loadCoaches();
      });
      this.isNewRecord = false;
      this.editedCoach = null;
    } else {
      console.log("lol");
      this.service.updateCoach(this.editedCoach.coachId, this.editedCoach).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено', console.log("lol");
          this.loadCoaches();
      });
      this.editedCoach = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.coaches.pop();
      this.isNewRecord = false;
    }
    this.editedCoach = null;
  }

  deleteCoach(coach: Coach) {
    this.service.deleteCoach(coach.coachId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено',
        this.loadCoaches();
    });
  }

}
