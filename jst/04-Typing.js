"use strict";
(() => {
    /**
     * Cuando una variable infiere un tipo no se le puede cambiar posteriormente
     */
    let myProductName = 'Product 1';
    let myProductPrice = 123;
    myProductName = 'change';
    myProductName.toLowerCase();
    myProductPrice.toFixed();
    /**
     * A las constantes no se les puede cambiar el tipo de dato ni el dato
     */
    const myProductStock = 1000;
    const myProductName2 = 'Product 1';
})();
