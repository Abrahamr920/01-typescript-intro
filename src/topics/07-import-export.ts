import {
  Product,
  taxCalculation,
  TaxCalculationOptions,
} from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia A1",
    price: 100,
  },
  {
    description: "iPad Air",
    price: 200,
  },
  {
    description: "MacBook Pro",
    price: 300,
  },
];

const options: TaxCalculationOptions = {
  tax: 0.15,
  products: shoppingCart,
};

const [total, taxValue] = taxCalculation(options);
console.log(`Total: ${total}`);
console.log(`Tax: ${taxValue}`);
export {};
