import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Gym} from "./gym";

@Injectable()
export class GymService {

  private url = 'http://localhost:8080/api/gyms';

  constructor(private http: HttpClient) { }

  getGyms() {
    return this.http.get(this.url);
  }

  createGym(gym: Gym) {
    return this.http.post(this.url, gym);
  }

  updateGym(id: number, gym: Gym) {
    return this.http.put(this.url + '/' + id, gym);
  }

  deleteGym(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
