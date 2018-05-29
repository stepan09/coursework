import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Organizer} from "./organizer";

@Injectable()
export class OrganizerService {

  private url = 'http://localhost:8080/api/organizers'

  constructor(private http: HttpClient) { }

  getOrganizers() {
    return this.http.get(this.url);
  }

  createOrganizer(organizer: Organizer) {
    return this.http.post(this.url, organizer);
  }

  updateOrganizer(id:number, organizer: Organizer) {
    return this.http.put(this.url + '/' + id, organizer)
  }

  deleteOrganizer(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
