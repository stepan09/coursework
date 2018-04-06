import {SportClub} from "../sport-club/sportClub";

export class Sportsman {

  sportsmanId: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: Date;
  sportClub: SportClub;


  constructor(sportsmanId: number, lastName: string, firstName: string, middleName: string, birthDate: Date, sportClub: SportClub) {
    this.sportsmanId = sportsmanId;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.birthDate = birthDate;
    this.sportClub = sportClub;
  }
}
