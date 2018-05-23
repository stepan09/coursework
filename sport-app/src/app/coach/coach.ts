import {Sportsman} from "../sportsman/sportsman";

export class Coach {

  coachId: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: Date;
  sportsmen: Array<Sportsman>;


  constructor(coachId: number, lastName: string, firstName: string, middleName: string, birthDate: Date, sportsmen: Array<Sportsman>) {
    this.coachId = coachId;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.birthDate = birthDate;
    this.sportsmen = sportsmen;
  }
}
