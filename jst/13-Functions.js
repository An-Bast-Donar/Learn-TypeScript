"use strict";
(() => {
    function createProductToJsonV1(title, createdAt, stock, size) {
        return {
            title,
            createdAt,
            stock,
            size
        };
    }
    const producto1 = createProductToJsonV1('P1', new Date(), 12, 'XL');
    console.log(producto1);
    console.log(producto1.title);
    console.log(producto1.stock);
    console.log(producto1.size);
    /**
     * Funsion felcha
     */
    const createProductToJsonV2 = (title, createdAt, stock, 
    /**
     * Optional chaining, regresa undefined en caso de no encontrar nada
     * Le dice a la variable previamente que tambien puede ser de tipo undefined
     */
    size) => {
        return {
            title,
            createdAt,
            stock,
            size
        };
    };
    const producto2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(producto2);
    console.log(producto2.title);
    console.log(producto2.stock);
    console.log(producto2.size);
})();
