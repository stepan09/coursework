export class Competition {

  competitionId: number;
  name: string;
  startDate: Date;
  finishDate: Date;


  constructor(competitionId: number, name: string, startDate: Date, finishDate: Date) {
    this.competitionId = competitionId;
    this.name = name;
    this.startDate = startDate;
    this.finishDate = finishDate;
  }
}
