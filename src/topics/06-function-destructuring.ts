interface Product {
  description: string;
  price: number;
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: "Nokia A1",
  price: 100,
};
const tablet: Product = {
  description: "iPad Air",
  price: 200,
};
const laptop: Product = {
  description: "MacBook Pro",
  price: 300,
};

function taxCalculation(options: TaxCalculationOptions): [number, number] {
  // function taxCalculation({tax,products}: TaxCalculationOptions): [number, number] {
  let total = 0;
  const { tax, products } = options;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet, laptop];

const tax = 0.15;

const result = taxCalculation({
  tax,
  products: shoppingCart,
});

const [total, taxValue] = result;

console.log("Total: ", total);
console.log("Tax: ", taxValue);

export {};
