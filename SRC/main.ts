// src/main.ts
import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

// Inventory array with different product types
const inventory = [
  new PhysicalProduct("P001", "Laptop", 1000, 2.5),
  new DigitalProduct("D001", "E-Book", 20, 5),
  new PhysicalProduct("P002", "T-Shirt", 25, 0.3)
];

// Loop through inventory and display details
for (const product of inventory) {
  console.log(product.displayDetails());
  console.log("Final Price with Tax:", calculateTax(product));

  if (product instanceof PhysicalProduct) {
    console.log("Weight:", product.formattedWeight);
  } else if (product instanceof DigitalProduct) {
    console.log("File Size:", product.formattedFileSize);
  }

  console.log("---------------");
}
