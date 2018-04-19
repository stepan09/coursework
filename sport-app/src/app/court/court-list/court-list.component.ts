import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CourtService} from "../court.service";
import {Court} from "../court";

@Component({
  selector: 'app-court-list',
  templateUrl: './court-list.component.html',
  styleUrls: ['./court-list.component.css'],
  providers: [CourtService]
})
export class CourtListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedCourt: Court;
  courts: Array<Court>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: CourtService) {
    this.courts = new Array<Court>();
  }

  ngOnInit() {
    this.loadCourts();
  }

  private loadCourts(){
    this.service.getCourts().subscribe((data: Court[]) => {
      this.courts = data;
    });
  }

  addCourt(){
    this.editedCourt = new Court(0,null,null,null,null);
    this.courts.push(this.editedCourt);
    this.isNewRecord = true;
  }

  editCourt(court: Court) {
    this.editedCourt = new Court(court.courtId, court.name, court.foundationDate, court.address, court.coverType);
  }

  loadTemplate(court: Court) {
    if (this.editedCourt && this.editedCourt.courtId == court.courtId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveCourt(court: Court) {
    if (this.isNewRecord) {
      this.service.createCourt(this.editedCourt).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлено',
          this.loadCourts();
      });
      this.isNewRecord = false;
      this.editedCourt = null;
    } else {
      this.service.updateCourt(this.editedCourt.courtId, this.editedCourt).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadCourts();
      });
      this.editedCourt = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.courts.pop();
      this.isNewRecord = false;
    }
    this.editedCourt = null;
  }

  deleteCourt(court: Court) {
    this.service.deleteCourt(court.courtId).subscribe(data =>{
      this.statusMessage = 'Дані успішно видалено',
        this.loadCourts();
    });
  }
}
