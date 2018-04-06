import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Coach} from "./Coach";

@Injectable()
export class CoachService {

  private apiUrl = 'http://localhost:8080/api/coaches';

  constructor(private http: Http) { }

  findAll(): Observable<Coach[]> {
    return this.http.get(this.apiUrl)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  public saveCoach(coach: Coach) {
    return this.http.post(this.apiUrl, coach)
      .map(res=>res.json());
  }

  deleteCoachById(coach: Coach) {
    console.log(coach.coachId);
    return this.http.delete(this.apiUrl + "/"+ coach.coachId);
  }

  updateCoach(coach: Coach) {
    return this.http.put(this.apiUrl, coach)
      .map(res=>res.json());
  }
}
