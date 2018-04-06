import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sportsman} from "./sportsman";

@Injectable()
export class SportsmanService {

  private url = 'http://localhost:8080/api/sportsmen';

  constructor(private http:HttpClient) { }

  getSportsmen() {
    return this.http.get(this.url);
  }

  createSportsman(sportsman: Sportsman) {
    return this.http.post(this.url, sportsman);
  }

  updateSportsman(id: number, sportsman: Sportsman) {
    return this.http.put(this.url + '/' + id, sportsman);
  }

  deleteSportsman(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
