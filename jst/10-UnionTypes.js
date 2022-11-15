"use strict";
(() => {
    /**
     * Una variable pueden asignarsele valores de diferentes tipos
     */
    let userId;
    userId = 1212;
    userId = 'asasa';
    function greeting(myText) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        }
        else {
            console.log(`number ${myText.toFixed(1)}`);
        }
    }
    greeting('Nicolas');
    greeting(50.25);
})();
