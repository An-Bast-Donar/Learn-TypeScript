"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = require("./product.service");
/**
 * Se importan las funciones y la variables de otro archivo
 */
(0, product_service_1.createProduct)({
    name: 'Pro1',
    createdAt: new Date(1993, 1, 1),
    stock: 5
});
(0, product_service_1.createProduct)({
    name: 'Pro2',
    createdAt: new Date(1993, 1, 1),
    stock: 6,
    size: 'XL'
});
const total = (0, product_service_1.calcStock)();
console.log(product_service_1.products);
console.log(total);
