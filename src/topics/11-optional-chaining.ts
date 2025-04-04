export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Fernando",
};
const passenger2: Passenger = {
  name: "Juan",
  children: ["Ana", "Luis"],
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length ?? 0;
  1;
  console.log(
    `${passenger.name} has ${
      howManyChildren === 0 ? "no" : howManyChildren
    } children`
  );
};
printChildren(passenger1); // 0
printChildren(passenger2); // 2
export {};
