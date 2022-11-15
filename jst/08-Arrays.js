"use strict";
(() => {
    /**
     * El array infiere que puede tomar solo los tipos de datos presentes en la inicializacion
     * Si se intenta setear otros valores, dara error
     */
    let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
    /**
     * Se declaran los tipos de datos que acepta el array y se inicializa
     */
    let mixed = ['hola', true];
    mixed.push(12);
    mixed.push('as');
    mixed.push(true);
    mixed.push({});
    mixed.push([]);
    /**
     * La importancia de que un array solo contenga un tipo de dato es que se pueden realizar operaciones seguras para todos los elementos del array
     */
    let numbers = [1, 2];
    let multipl = numbers.map(item => item * 2);
    console.log(multipl);
})();
