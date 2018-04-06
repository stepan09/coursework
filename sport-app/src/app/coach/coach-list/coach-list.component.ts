import { Component, OnInit } from '@angular/core';
import {CoachService} from "../coach.service";
import {Coach} from "../Coach";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.css']
})
export class CoachListComponent implements OnInit {

  private coaches: Coach[];

  constructor(private coachService: CoachService,
              private router: Router) { }

  ngOnInit() {
    this.getAllCoaches();
  }

  getAllCoaches() {
    this.coachService.findAll().subscribe(
      coaches=>{
        this.coaches = coaches;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirectNewCoachPage() {
    this.router.navigate(['/coach/create']);
  }

  editCoachPage(coach: Coach) {
    if (coach) {
      this.router.navigate(['/coach/edit', coach.coachId]);
    }
  }

  deleteCoach(coach: Coach) {
    this.coachService.deleteCoachById(coach)
      .subscribe(data => {
        this.coaches = this.coaches.filter(c => c !== coach);
      });
    console.log('Delete Coach');
  }

}
