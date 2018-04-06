import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SportsmanService} from "../sportsman.service";
import {Sportsman} from "../Sportsman";

@Component({
  selector: 'app-sportsman-create',
  templateUrl: './sportsman-create.component.html',
  styleUrls: ['./sportsman-create.component.css'],
  providers: [SportsmanService]
})
export class SportsmanCreateComponent implements OnInit {

  private sportsman1: Sportsman;

  constructor(private router: Router,
              private sportsmanService: SportsmanService) { }

  ngOnInit() {
  }

  saveSportsman(sportsman: Sportsman){
    this.sportsman1 = new Sportsman(sportsman.lastName, sportsman.firstName, sportsman.middleName, sportsman.birthDate);
    this.sportsmanService.saveSportsman(this.sportsman1)
      .subscribe(sportsman => {
        alert("Sportsman " + this.sportsman1.lastName + " created successfully");
      });
  }
}
