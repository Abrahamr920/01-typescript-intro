function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "newProperty";
    hello = "Override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "ABC123";
  print() {
    console.log("Hola mundo");
  }
}

const myClass = new SuperClass();
console.log(myClass);
export {};
