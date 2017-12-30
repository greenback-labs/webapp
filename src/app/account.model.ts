export class Account {
  private id: number;
  private title: string;
  private description: string;
  private recordAccount: Account;

  constructor(
    id: number,
    title: string,
    description: string,
    recordAccount: Account
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.recordAccount = recordAccount;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getRecordAccount(): Account {
    return this.recordAccount;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setRecordAccount(recordAccount: Account): void {
    this.recordAccount = recordAccount;
  }
}
