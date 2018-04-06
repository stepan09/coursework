import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Coach} from "./coach";

@Injectable()
export class CoachService {

  private url = 'http://localhost:8080/api/coaches';

  constructor(private http: HttpClient) { }

  getCoaches() {
    return this.http.get(this.url);
  }

  createCoach(coach: Coach) {
    return this.http.post(this.url, coach);
  }

  updateCoach(id: number, coach: Coach) {
    return this.http.put(this.url + '/' + id, coach);
  }

  deleteCoach(id: number) {
    return this.http.delete(this.url+ '/' + id);
  }

}
