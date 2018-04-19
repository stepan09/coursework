import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Gym} from "../gym";
import {GymService} from "../gym.service";

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css'],
  providers: [GymService]
})
export class GymListComponent implements OnInit {

  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

  editedGym: Gym;
  gyms: Array<Gym>;
  isNewRecord: boolean;
  statusMessage: string;

  constructor(private service: GymService) {
    this.gyms = new Array<Gym>();
  }

  ngOnInit() {
    this.loadGyms();
  }

  private loadGyms() {
    this.service.getGyms().subscribe((data: Gym[]) => {
      this.gyms = data;
    });
  }

  addGym() {
    this.editedGym = new Gym(0, null,null,null);
    this.gyms.push(this.editedGym);
    this.isNewRecord = true;
  }

  editGym(gym: Gym) {
    this.editedGym = new Gym(gym.gymId, gym.name, gym.foundationDate, gym.address);
  }

  loadTemplate(gym: Gym) {
    if (this.editedGym && this.editedGym.gymId == gym.gymId) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveGym(gym: Gym) {
    if (this.isNewRecord) {
      this.service.createGym(this.editedGym).subscribe(data => {
        this.statusMessage = 'Дані успішно добавлено',
          this.loadGyms();
      });
      this.isNewRecord = false;
      this.editedGym = null;
    } else {
      this.service.updateGym(this.editedGym.gymId, this.editedGym).subscribe(data => {
        this.statusMessage = 'Дані успішно оновлено',
          this.loadGyms();
      });
      this.editedGym = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.gyms.pop();
      this.isNewRecord = false;
    }
    this.editedGym = null;
  }

  deleteGym(gym: Gym) {
    this.service.deleteGym(gym.gymId).subscribe(data => {
      this.statusMessage = 'Дані успішно видалено',
        this.loadGyms();
    });
  }
}
