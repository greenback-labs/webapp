export class Person {
  private id: number;
  private name: string;
  private description: string;
  private recordPerson: Person;

  constructor(
    id: number,
    name: string,
    description: string,
    recordPerson: Person
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.recordPerson = recordPerson;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getRecordPerson(): Person {
    return this.recordPerson;
  }

  setName(name: string): void {
    this.name = name;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setRecordPerson(recordPerson: Person): void {
    this.recordPerson = recordPerson;
  }
}
