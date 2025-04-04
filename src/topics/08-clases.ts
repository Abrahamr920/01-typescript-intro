export class Person {
  //   public name?: string;
  //   public address?: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string = "No address"
  ) {}
}
// export class Hero extends Person {
//   constructor(
//     public alias: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  constructor(
    public alias: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const person = new Person("Tony", "Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", person);

console.log(ironman);
