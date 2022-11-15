"use strict";
(() => {
    /**
     * Se le puede especificar a una funcion que tipo de dato retorna
     */
    const calcTotal = (prices) => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString();
    };
    /**
     * Si la funcion no retorna un dato, por defecto la funcion es de tipo void, aunque tambien se le puede especificar
     */
    const printTotal = (prices) => {
        const rta = calcTotal(prices);
        console.log(`El total es ${rta}`);
    };
    printTotal([1, 2, 1, 1, 1]);
})();
