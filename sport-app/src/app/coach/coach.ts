export class Coach {

  coachId: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: Date;


  constructor(coachId: number, lastName: string, firstName: string, middleName: string, birthDate: Date) {
    this.coachId = coachId;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.birthDate = birthDate;
  }
}
