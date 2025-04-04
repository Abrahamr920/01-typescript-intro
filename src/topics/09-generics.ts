export function whatsMyType<T>(argument: T):T {
  return argument;
}

let amIString = whatsMyType('Hola mundo');
let amINumber = whatsMyType(123);
let amIArray = whatsMyType([1, 2, 3]);
console.log(amIString.split(' '));
console.log(amINumber.toFixed(2));
console.log(amIArray.join('-'));
export { };

