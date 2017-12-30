import { Transaction } from "./transaction";

export class Installment {
  id: number;
  value: number;
  deadlineDate: Date;
  effectiveDate: Date;
  status: number;
  recordTransaction: Transaction;
}
