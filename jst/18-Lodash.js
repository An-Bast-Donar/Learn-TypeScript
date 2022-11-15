"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Para importar librerias sin soporte en Ts
 * Esto es similar pero descontinuado que el importe actual: var _ = require('lodash');
 * Instalar la dependencia con: $ npm i --save lodash
 * instalar los types de la dependencia: $ npm i --save-dev @types/lodash
 * Esta libreria es para agrupar diferentes tipos de datos
 */
const lodash_1 = __importDefault(require("lodash"));
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
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
