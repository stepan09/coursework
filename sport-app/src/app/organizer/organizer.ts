export class Organizer {

  organizerId: number;
  lastName: string;
  firstName: string;
  middleName: string;


  constructor(organizerId: number, lastName: string, firstName: string, middleName: string) {
    this.organizerId = organizerId;
    this.lastName = lastName;
    this.firstName = firstName;
    this.middleName = middleName;
  }


}
