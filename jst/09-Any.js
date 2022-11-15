"use strict";
(() => {
    /**
     * Le permite a la variable resivir cualquier tipo de dato en cualquier momneto
     * Es recomendado nunca usarla
     */
    let myDynamicVar;
    myDynamicVar = 100;
    myDynamicVar = null;
    myDynamicVar = {};
    myDynamicVar = '';
    myDynamicVar = 'Hola';
    /**
     * Trata el valor de la variable como string
     */
    const rta1 = myDynamicVar.toUpperCase();
    console.log(rta1);
    /**
     * Trata el valor de la variable como number
     */
    myDynamicVar = 5025;
    const rta2 = myDynamicVar.toFixed();
    console.log(rta2);
})();
