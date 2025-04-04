function classDecorator() {}

// @classDecorator
export class SuperClass {
  public myProperty: string = "ABC123";
  print() {
    console.log("Hola mundo");
  }
}

const myClass = new SuperClass();
console.log(myClass);
export {};
