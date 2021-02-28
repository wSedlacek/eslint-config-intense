const number = 1;
console.log({ number });

export class Example {
  constructor(private readonly data: string) {}

  public something(): string {
    return this.data;
  }
}
