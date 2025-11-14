"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
// src/models/DigitalProduct.ts
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    // Override tax calculation (no tax for digital products)
    getPriceWithTax() {
        return this.price;
    }
    // Getter for formatted file size
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
}
exports.DigitalProduct = DigitalProduct;
