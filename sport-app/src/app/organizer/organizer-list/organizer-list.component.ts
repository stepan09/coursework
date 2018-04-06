import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {OrganizerService} from "../organizer.service";
import {Organizer} from "../organizer";
import 'rxjs/Rx';

@Component({
  selector: 'app-organizer-list',
  templateUrl: './organizer-list.component.html',
  styleUrls: ['./organizer-list.component.css'],
  providers: [OrganizerService]
})
export class OrganizerListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedOrganizer: Organizer;
  organizers: Array<Organizer>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: OrganizerService) {
    this.organizers = new Array<Organizer>();
  }

  ngOnInit() {
    this.loadOrganizers();
  }

  private loadOrganizers() {
    this.serv.getOrganizers().subscribe((data: Organizer[]) => {
      this.organizers = data;
    });
  }

  addOrganizer() {
    this.editedOrganizer = new Organizer(0, '','','');
    this.organizers.push(this.editedOrganizer);
    this.isNewRecord = true;
  }

  editOrganizer(organizer: Organizer) {
    this.editedOrganizer = new Organizer(organizer.organizerId, organizer.lastName, organizer.firstName, organizer.middleName);
  }

  loadTemplate(organizer: Organizer) {
    if (this.editedOrganizer && this.editedOrganizer.organizerId == organizer.organizerId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveOrganizer(organizer: Organizer) {
    if (this.isNewRecord) {
      this.serv.createOrganizer(this.editedOrganizer).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлені',
          this.loadOrganizers();
      });
      this.isNewRecord = false;
      this.editedOrganizer = null;
    } else {
      this.serv.updateOrganizer(this.editedOrganizer.organizerId, this.editedOrganizer).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadOrganizers();
      });
      this.editedOrganizer = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.organizers.pop();
      this.isNewRecord = false;
    }
    this.editedOrganizer = null;
  }

  deleteOrganizer(organizer: Organizer) {
    this.serv.deleteOrganizer(organizer.organizerId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено',
        this.loadOrganizers();
    });
  }
}
