export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

//! This also is a valid syntax. It's kind of a shortcut provided by Typescript.
// export class Ingredient {
//     constructor(public name: string, public amount: string) {}
// }
