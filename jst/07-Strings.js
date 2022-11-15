"use strict";
(() => {
    /**
     * Otros valores diferentes a string pueden generar errores
     * Se pueden settear valores tanto en comillas simples('), comillas dobles(") o backtick(`)
     * Con el backtick se pueden introducir variables en el texto con la expresion ${} y es sensible a tabulaciones
     */
    let productTitle = 'My amazing product';
    let productDescription = "I'm bla bla ba bla bl s asasas";
    let productPrice = 100;
    let isNew = false;
    let summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
    console.log(summary);
})();
