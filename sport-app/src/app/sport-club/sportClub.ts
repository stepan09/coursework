export class SportClub {
  sportClubId: number;
  name: string;
  foundationDate: Date;


  constructor(sportClubId: number, name: string, foundationDate: Date) {
    this.sportClubId = sportClubId;
    this.name = name;
    this.foundationDate = foundationDate;
  }
}
