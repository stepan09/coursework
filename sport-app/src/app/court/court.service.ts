import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Court} from "./court";

@Injectable()
export class CourtService {

  private url = 'http://localhost:8080/api/courts';

  constructor(private http: HttpClient) { }

  getCourts() {
    return this.http.get(this.url);
  }

  createCourt(court: Court) {
    return this.http.post(this.url, court);
  }

  updateCourt(id: number, court: Court) {
    return this.http.put(this.url + '/' + id, court);
  }

  deleteCourt(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
