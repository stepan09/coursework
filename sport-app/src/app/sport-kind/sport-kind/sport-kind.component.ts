import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SportKindService} from "../sport-kind.service";
import {SportKind} from "../sportKind";

@Component({
  selector: 'app-sport-kind',
  templateUrl: './sport-kind.component.html',
  styleUrls: ['./sport-kind.component.css'],
  providers: [SportKindService]
})
export class SportKindComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedSportKind: SportKind;
  sportKinds: Array<SportKind>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: SportKindService) {
    this.sportKinds = new Array<SportKind>();
  }

  ngOnInit() {
    this.loadSportKind();
  }

  private loadSportKind() {
    this.service.getSportKinds().subscribe((data: SportKind[]) => {
      this.sportKinds = data;
    });
  }

  addSportKind() {
    this.editedSportKind = new SportKind(0, null);
    this.sportKinds.push(this.editedSportKind);
    this.isNewRecord = true;
  }

  editSportKind(sportKind: SportKind) {
    this.editedSportKind = new SportKind(sportKind.id, sportKind.name);
  }

  loadTemplate(sportKind: SportKind) {
    if (this.editedSportKind && this.editedSportKind.id == sportKind.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveSportKind() {
    if (this.isNewRecord) {
      this.service.createSportKind(this.editedSportKind).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлені',
          this.loadSportKind();
      });
      this.isNewRecord = false;
      this.editedSportKind = null;
    } else {
      this.service.updateSportKind(this.editedSportKind.id, this.editedSportKind).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadSportKind();
      });
      this.editedSportKind = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.sportKinds.pop();
      this.isNewRecord = false;
    }
    this.editedSportKind = null;
  }

  deleteSportKind(sportKind: SportKind) {
    this.service.deleteSportKind(sportKind.id).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено',
        this.loadSportKind();
    });
  }

}
