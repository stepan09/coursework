import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {StadiumService} from '../stadium.service';
import {Stadium} from '../stadium';
import 'rxjs/Rx';

@Component({
  selector: 'app-stadium-list',
  templateUrl: './stadium-list.component.html',
  styleUrls: ['./stadium-list.component.css'],
  providers: [StadiumService]
})
export class StadiumListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedStadium: Stadium;
  stadiums: Array<Stadium>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private serv: StadiumService) {
    this.stadiums = new Array<Stadium>();
  }

  ngOnInit() {
    this.loadStadiums();
  }

  private loadStadiums() {
    this.serv.getStadiums().subscribe((data: Stadium[]) => {
      this.stadiums = data;
    });
  }

  addStadium() {
    this.editedStadium = new Stadium(0, '', null, '', 0, null);
    this.stadiums.push(this.editedStadium);
    this.isNewRecord = true;
  }

  editStadium(stadium: Stadium) {
    this.editedStadium = new Stadium(stadium.stadiumId , stadium.name, stadium.foundationDate, stadium.address, stadium.capacity, stadium.treadmill);
  }

  loadTemplate(stadium: Stadium) {
    if (this.editedStadium && this.editedStadium.stadiumId == stadium.stadiumId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveStadium() {
    if (this.isNewRecord) {
      this.serv.createStadium(this.editedStadium).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлені',
        this.loadStadiums();
      });
      this.isNewRecord = false;
      this.editedStadium = null;
    } else {
      this.serv.updateStadium(this.editedStadium.stadiumId, this.editedStadium).subscribe(data => {
        this.statusMessage = 'Дані успішно обновлені',
        this.loadStadiums();
      });
      this.editedStadium = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.stadiums.pop();
      this.isNewRecord = false;
    }
    this.editedStadium = null;
  }

  deleteStadium(stadium: Stadium) {
    this.serv.deleteStadium(stadium.stadiumId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалені',
        this.loadStadiums();
    });
  }
}
