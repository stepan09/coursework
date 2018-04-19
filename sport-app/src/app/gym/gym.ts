export class Gym {

  gymId: number;
  name: string;
  foundationDate: Date;
  address: string;

  constructor(gymId: number, name: string, foundationDate: Date, address: string) {
    this.gymId = gymId;
    this.name = name;
    this.foundationDate = foundationDate;
    this.address = address;
  }
}
