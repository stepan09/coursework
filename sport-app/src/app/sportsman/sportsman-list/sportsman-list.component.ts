import { Component, OnInit } from '@angular/core';
import {Sportsman} from "../Sportsman";
import {SportsmanService} from "../sportsman.service";
import {Router} from "@angular/router";
import {Coach} from "../../coach/Coach";

@Component({
  selector: 'app-sportsman-list',
  templateUrl: './sportsman-list.component.html',
  styleUrls: ['./sportsman-list.component.css'],
})
export class SportsmanListComponent implements OnInit {

  private sportsmen: Sportsman[];

  constructor(private sportsmanService: SportsmanService,
              private router: Router) { }

  ngOnInit() {
    this.getAllSportsmen();
  }

  getAllSportsmen() {
    this.sportsmanService.findAll().subscribe(
      sportsmen=> {
        this.sportsmen = sportsmen;
      },
        err=> {
        console.log(err)
        }
        );
  }

  redirectNewSportsmanPage() {
    this.router.navigate(['/sportsman/create']);
  }

  editSportsmanPage(sportsman: Sportsman) {
    if (sportsman) {
      this.router.navigate(['/sportsman/edit', sportsman.sportsmanId]);
    }
  }

  deleteSportsman(sportsman: Sportsman) {
    this.sportsmanService.deleteSportsmanById(sportsman)
      .subscribe(data => {
        this.sportsmen = this.sportsmen.filter(c => c !== sportsman);
      });
    console.log('Delete sportsman');
  }

}
