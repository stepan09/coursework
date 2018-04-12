export class Court {

  courtId: number;
  name: string;
  foundationDate: Date;
  address: string;
  coverType: string;


  constructor(courtId: number, name: string, foundationDate: Date, address: string, coverType: string) {
    this.courtId = courtId;
    this.name = name;
    this.foundationDate = foundationDate;
    this.address = address;
    this.coverType = coverType;
  }
}
