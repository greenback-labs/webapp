import { Transaction } from "./transaction.model";

export class Installment {
  private id: number;
  private value: number;
  private deadlineDate: Date;
  private effectiveDate: Date;
  private status: string;
  private recordTransaction: Transaction;

  constructor(
    id: number,
    value: number,
    deadlineDate: Date,
    effectiveDate: Date,
    status: string,
    recordTransaction: Transaction
  ) {
    this.id = id;
    this.value = value;
    this.deadlineDate = deadlineDate;
    this.effectiveDate = effectiveDate;
    this.status = status;
    this.recordTransaction = recordTransaction;
  }

  getId(): number {
    return this.id;
  }

  getValue(): number {
    return this.value;
  }

  getDeadlineDate(): Date {
    return this.deadlineDate;
  }

  getEffectiveDate(): Date {
    return this.effectiveDate;
  }

  getStatus(): string {
    return this.status;
  }

  getRecordTransaction(): Transaction {
    return this.recordTransaction;
  }

  setValue(value: number): void {
    this.value = value;
  }

  setDeadlineDate(deadlineDate: Date): void {
    this.deadlineDate = deadlineDate;
  }

  setEffectiveDate(effectiveDate: Date): void {
    this.effectiveDate = effectiveDate;
  }

  setStatus(status: string): void {
    this.status = status;
  }

  setRecordTransaction(recordTransaction: Transaction): void {
    this.recordTransaction = recordTransaction;
  }
}
