export class Sportsman {

  sportsmanId: number;
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: Date;


  constructor(lastName: string, firstName: string, middleName: string, birthDate: Date) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
    this.birthDate = birthDate;
  }
}
