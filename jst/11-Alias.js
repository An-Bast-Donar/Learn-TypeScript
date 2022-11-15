"use strict";
(() => {
    let userId;
    let shirtSize;
    shirtSize = 'L';
    shirtSize = 'M';
    shirtSize = 'XL';
    shirtSize = 'M';
    /**
     * Estos alias tambien pueden ser usados en los argumentos de las funciones
     */
    function greeting(myText, size) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
    }
    greeting(11111, 'XL');
    greeting('111', 'XL');
})();
