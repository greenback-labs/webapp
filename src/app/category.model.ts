export class Category {
  private id: number;
  private title: string;
  private description: string;
  private recordCategory: Category;

  constructor(
    id: number,
    title: string,
    description: string,
    recordCategory: Category
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.recordCategory = recordCategory;
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

  getRecordCategory(): Category {
    return this.recordCategory;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  setRecordCategory(recordCategory: Category): void {
    this.recordCategory = recordCategory;
  }
}
