import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SportClub} from './sportClub';

@Injectable()
export class SportClubService {

  private url = 'http://localhost:8080/api/sport-clubs';

  constructor(private http: HttpClient) { }

  getSportClubs() {
    return this.http.get(this.url);
  }

  createSportClub(sportClub: SportClub) {
    return this.http.post(this.url, sportClub);
  }

  updateSportClub(id: number, sportClub: SportClub) {
    return this.http.put(this.url + '/' + id, sportClub);
  }

  deleteSportClub(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

}
