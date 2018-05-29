import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stadium} from './stadium';

@Injectable()
export class StadiumService {

  private url = 'http://localhost:8080/api/stadiums';

  constructor(private http: HttpClient) { }

  getStadiums() {
    return this.http.get(this.url);
  }

  createStadium(stadium: Stadium) {
    return this.http.post(this.url, stadium);
  }

  updateStadium(id: number, stadium: Stadium) {
    return this.http.put(this.url + '/' + id, stadium);
  }

  deleteStadium(id: number) {
    return this.http.delete(this.url + '/' + id );
  }
}
