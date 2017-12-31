import { Account } from './account.model';
import { Category } from './category.model';
import { Installment } from './installment.model';
import { Person } from './person.model';

export class Transaction {
  id: number;
  transferCode: number;
  type: string;
  value: number;
  title: string;
  description: string;
  date: Date;
  recordAccount: Account;
  recordCategory: Category;
  recordPerson: Person;
  recordsInstallment: Installment[];
}
