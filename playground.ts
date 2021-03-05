const NUMBER = 42;

export class Example {
  constructor(private readonly data: string) {}

  public something(_something: string): string {
    console.warn({ number: NUMBER });
    return this.data;
  }
}
