"use strict";
(() => {
    /**
     * Son su propio tipo de dato undefined y null
     * Por ende deben especificarse en los tipos de datos de la variable
     */
    let myNull = null;
    let myUndefined = undefined;
    let myNumber = null;
    myNumber = 12;
    let myString = undefined;
    myString = 'aas';
    /**
     * los diferentes tipos de dato tambien pueden definirse para los argumentos de una funcion
     */
    function hiV1(name) {
        let hello = 'Hola ';
        if (name) {
            hello += name.toLowerCase();
        }
        else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    function hiV2(name) {
        let hello = 'Hola ';
        /**
         * Operador Nullish
         */
        hello += (name === null || name === void 0 ? void 0 : name.toLowerCase()) || 'nobody';
        console.log(hello);
    }
    hiV1('Nicolas');
    hiV1(null);
    hiV2('Nicolas');
    hiV2(null);
})();
