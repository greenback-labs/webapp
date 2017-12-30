import { Account } from './account';
import { Category } from './category';
import { Installment } from './installment';
import { Person } from './person';

export class Transaction {
  id: number;
  transfer_code: number;
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
