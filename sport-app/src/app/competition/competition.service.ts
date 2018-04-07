import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Competition} from "./competition";

@Injectable()
export class CompetitionService {

  private url = 'http://localhost:8080/api/competitions';

  constructor(private http: HttpClient) { }

  getCompetitions() {
    return this.http.get(this.url);
  }

  createCompetition(competition: Competition) {
    return this.http.post(this.url, competition);
  }

  updateCompetition(id: number, competition: Competition) {
    return this.http.put(this.url + '/' + id, competition);
  }

  deleteCompetition(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
