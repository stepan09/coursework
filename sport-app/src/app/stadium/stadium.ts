export class Stadium {

  stadiumId: number;
  name: string;
  foundationDate: Date;
  address: string;
  capacity: number;
  treadmill: boolean;

  constructor(stadiumId, name, foundationDate, address, capacity, treadmill) {
    this.stadiumId = stadiumId;
    this.name = name;
    this.foundationDate = foundationDate;
    this.address = address;
    this.capacity = capacity;
    this.treadmill = treadmill;
  }
}
