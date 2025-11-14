"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/main.ts
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
// Inventory array with different product types
const inventory = [
    new PhysicalProduct_1.PhysicalProduct("P001", "Laptop", 1000, 2.5),
    new DigitalProduct_1.DigitalProduct("D001", "E-Book", 20, 5),
    new PhysicalProduct_1.PhysicalProduct("P002", "T-Shirt", 25, 0.3)
];
// Loop through inventory and display details
for (const product of inventory) {
    console.log(product.displayDetails());
    console.log("Final Price with Tax:", (0, taxCalculator_1.calculateTax)(product));
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log("Weight:", product.formattedWeight);
    }
    else if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log("File Size:", product.formattedFileSize);
    }
    console.log("---------------");
}
