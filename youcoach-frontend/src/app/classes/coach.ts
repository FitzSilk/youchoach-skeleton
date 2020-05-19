export class Coach {
  id: string;
  informations: string;
  availability: string;
  firstTopic: string;
  classesForFirstTopic: string;
  secondTopic: string;
  classesForSecondTopic: string;


  constructor(id: string, informations: string, availability: string, firstTopic: string, classesForFirstTopic: string,
              secondTopic: string, classesForSecondTopic: string) {
    this.id = id;
    this.informations = informations;
    this.availability = availability;
    this.firstTopic = firstTopic;
    this.classesForFirstTopic = classesForFirstTopic;
    this.secondTopic = secondTopic;
    this.classesForSecondTopic = classesForSecondTopic;
  }
}
