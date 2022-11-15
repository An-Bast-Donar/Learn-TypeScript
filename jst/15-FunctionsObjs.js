"use strict";
(() => {
    /**
     * El parametro data es un objeto con los atributos email y password
     * Ademas de ser una funcion void
     */
    const login = (data) => {
        console.log(data.email, data.password);
    };
    // Forma correcta de llamar la funcion y enviarle los parametros individuales
    login({
        email: 'nico@nico.co',
        password: 12121212
    });
    const products = [];
    const addProduct = (data) => {
        products.push(data);
    };
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12
    });
    addProduct({
        title: 'Pro1',
        createdAt: new Date(1993, 1, 1),
        stock: 12,
        size: 'XL'
    });
    console.log(products);
})();
