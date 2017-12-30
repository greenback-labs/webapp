import { Account } from './account.model';
import { Category } from './category.model';
import { Installment } from './installment.model';
import { Person } from './person.model';

export class Transaction {
  private id: number;
  private transferCode: number;
  private type: string;
  private value: number;
  private title: string;
  private description: string;
  private date: Date;
  private recordAccount: Account;
  private recordCategory: Category;
  private recordPerson: Person;
  private recordsInstallment: Installment[];

  constructor(
    id: number,
    transferCode: number,
    type: string,
    value: number,
    title: string,
    description: string,
    date: Date,
    recordAccount: Account,
    recordCategory: Category,
    recordPerson: Person,
    recordsInstallment: Installment[]
  ) {
    this.id = id;
    this.transferCode = transferCode;
    this.type = type;
    this.value = value;
    this.title = title;
    this.description = description;
    this.date = date;
    this.recordAccount = recordAccount;
    this.recordCategory = recordCategory;
    this.recordPerson = recordPerson;
    this.recordsInstallment = recordsInstallment;
  }

  getId(): number {
    return this.id;
  }

  getTransferCode(): number {
    return this.transferCode;
  }

  getType(): string {
    return this.type;
  }

  getValue(): number {
    return this.value;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getDate(): Date {
    return this.date;
  }

  getRecordAccount(): Account {
    return this.recordAccount;
  }

  getRecordCategory(): Category {
    return this.recordCategory;
  }
  
  getRecordPerson(): Person {
    return this.recordPerson;
  }
  
  getRecordsInstallment(): Installment[] {
    return this.recordsInstallment;
  }  

  setTransferCode(transferCode: number): void {
    this.transferCode = transferCode;
  }
  setType(type: string): void {
    this.type = type;
  }
  setValue(value: number): void {
    this.value = value;
  }
  setTitle(title: string): void {
    this.title = title;
  }
  setDescription(description: string): void {
    this.description = description;
  }
  setDate(date: Date): void {
    this.date = date;
  }
  setRecordAccount(recordAccount: Account): void {
    this.recordAccount = recordAccount;
  }
  setRecordCategory(recordCategory: Category): void {
    this.recordCategory = recordCategory;
  }
  setRecordPerson(recordPerson: Person): void {
    this.recordPerson = recordPerson;
  }
  setRecordsInstallment(recordsInstallment: Installment[]): void {
    this.recordsInstallment = recordsInstallment;
  }
}
