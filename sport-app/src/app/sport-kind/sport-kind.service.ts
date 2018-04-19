import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SportKind} from "./sportKind";

@Injectable()
export class SportKindService {

  private url = 'http://localhost:8080/api/sport-kinds';

  constructor(private http: HttpClient) { }

  getSportKinds() {
    return this.http.get(this.url);
  }

  createSportKind(sportKind: SportKind) {
    return this.http.post(this.url, sportKind);
  }

  updateSportKind(id: number, sportKind: SportKind) {
    return this.http.put(this.url + '/' + id, sportKind);
  }

  deleteSportKind(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

}
