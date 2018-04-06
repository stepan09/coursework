import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CoachService} from "../coach.service";
import {Coach} from "../coach";

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css'],
  providers: [CoachService]
})
export class CoachListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedCoach: Coach;
  coaches: Array<Coach>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: CoachService) {
    this.coaches = new Array<Coach>();
  }

  ngOnInit() {
    this.loadCoaches();
  }

  private loadCoaches() {
    this.service.getCoaches().subscribe((data: Coach[]) => {
      this.coaches = data;
    });
  }

  addCoach() {
    this.editedCoach = new Coach(0, null,null,null,null);
    this.coaches.push(this.editedCoach);
    this.isNewRecord = true;
  }

  editCoach(coach: Coach) {
    this.editedCoach = new Coach(coach.coachId, coach.lastName, coach.firstName, coach.middleName, coach.birthDate);
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
      this.service.updateCoach(this.editedCoach.coachId, this.editedCoach).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
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
