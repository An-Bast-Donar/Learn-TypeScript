/**
 * Para importar librerias sin soporte en Ts
 * Esto es similar pero descontinuado que el importe actual: var _ = require('lodash');
 * Instalar la dependencia con: $ npm i --save lodash
 * instalar los types de la dependencia: $ npm i --save-dev @types/lodash
 * Esta libreria es para agrupar diferentes tipos de datos
 */
import _lodash from 'lodash';

const data = [
    {
        username: "Orlando",
        role: "Jugador"
    },
    {
        username: "Rosalina",
        role: "Jugador"
    },
    {
        username: "Juan",
        role: "Moderador"
    },
    {
        username: "Laura",
        role: "Jugador"
    }
];

const rta = _lodash.groupBy(data, (item) => item.role)
console.log(rta);

