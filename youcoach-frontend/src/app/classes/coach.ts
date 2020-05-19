export class Coach {
  id: string;
  informations: string;
  availability: string;


  constructor(id: string, informations: string, availability: string) {
    this.id = id;
    this.informations = informations;
    this.availability = availability;
  }
}
