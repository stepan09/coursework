import {Organizer} from "../organizer/organizer";
import {SportKind} from "../sport-kind/sportKind";
import {Sportsman} from "../sportsman/sportsman";

export class Competition {

  competitionId: number;
  name: string;
  startDate: Date;
  finishDate: Date;
  organizer: Organizer;
  sportKind: SportKind;
  sportsmen: Array<Sportsman>;


  constructor(competitionId: number, name: string, startDate: Date, finishDate: Date, organizer: Organizer, sportKind: SportKind, sportsmen: Array<Sportsman>) {
    this.competitionId = competitionId;
    this.name = name;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.organizer = organizer;
    this.sportKind = sportKind;
    this.sportsmen = sportsmen;
  }
}
