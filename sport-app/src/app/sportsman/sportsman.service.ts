import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Sportsman} from "./Sportsman";

@Injectable()
export class SportsmanService {

  private apiUrl = 'http://localhost:8080/api/sportsmen';

  constructor(private http: Http) { }

  findAll(): Observable<Sportsman[]> {
    return this.http.get(this.apiUrl)
      .map((res:Response)=>res.json())
      .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  public saveSportsman(sportsman: Sportsman) {
    return this.http.post(this.apiUrl, sportsman)
      .map(res=>res.json());
  }

  deleteSportsmanById(sportsman: Sportsman) {
    console.log(sportsman.sportsmanId);
    return this.http.delete(this.apiUrl + "/"+ sportsman.sportsmanId);
  }

  updateSportsman(sportsman: Sportsman) {
    return this.http.put(this.apiUrl, sportsman)
      .map(res=>res.json());
  }

}
