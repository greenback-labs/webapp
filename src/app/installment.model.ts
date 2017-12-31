import { Transaction } from "./transaction.model";

export class Installment {
  id: number;
  value: number;
  deadlineDate: Date;
  effectiveDate: Date;
  status: string;
  recordTransaction: Transaction;
}
