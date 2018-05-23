import {SportClub} from "../sport-club/sportClub";
import {SportKind} from "../sport-kind/sportKind";

export class Sportsman {

  sportsmanId: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: Date;
  sportClub: SportClub;
  sportKinds: Array<SportKind>;


  constructor(sportsmanId: number, lastName: string, firstName: string, middleName: string, birthDate: Date, sportClub: SportClub, sportKinds: Array<SportKind>) {
    this.sportsmanId = sportsmanId;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.birthDate = birthDate;
    this.sportClub = sportClub;
    this.sportKinds = sportKinds;
  }
}
