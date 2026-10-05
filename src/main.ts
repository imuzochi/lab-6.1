import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

const myProducts = [
    new PhysicalProduct("AP830DJ", "Apple", 2, 0.2),
    new DigitalProduct("IM094YB", "Template", 12, 5)
];

for (const product of myProducts) {
    console.log(product.displayDetails());
    console.log(`Price with tax: $${product.getPriceWithTax()}`);
}