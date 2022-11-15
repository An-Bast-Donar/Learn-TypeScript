/**
 * Typescript
 * Es un analizador de codigo estatico
 * Ts contiene todas las caracteristicas de Js sus caracteristicas siguientes y adicional los beneficios de Ts
 * Js no analiza codigo estatico, al menos que se le agregue la notacion //ts-check al inicio de archivo
 * Para intalar Ts se debe tener node y npm
 * Comando de instalacion: (de forma local, ubicado en la carpeta del proyecto) $ npm i typescript --save-dev
 * Verificacion version de Ts: $ npx tsc --version
 * Ts transpira a Js para que el navegador lo lea, osea de archivo.ts a archivo.js
 * La transpiracion por defecto es a ES3 pero se puede modificar desde la terminal
 * Comando para traspirar el archivo Ts: $ npx tsc archivo.ts 
 * O podemos traspirar todos los archivos en la carpeta donde se ejecuta el comando con: $ npx tsc *.ts
 * Comando para traspirar el archivo Ts a una version especifica de Js: $ npx tsc arcihvo.ts --target es6 (o la version es deseada, es5, es7 o alguna otra)
 * Comando para indicar donde guardar el archivo Js traspirado: $ npx tsc archivo.ts --outDir carpeta
 * Compilar el js: $ node archivo.js (ejecutar el comando dentro de la carpeta donde esta el archivo a ejecutar)
 * Crear archivo con todas las configuraciones de traspiracion automatica: $ npx tsc --init
 * Se puede configurar el outDir, el rootDir y mas parametros de la traspiracion
 * Usar "use strict" al inicio del Js alerta de errores mas estrictos
 * Comando para traspirar a medida que se guarda el Ts: $ npx tsc --watch
 * En la pagina https://www.toptal.com/developers/gitignore/ podemos crear gitignore fundamentados y bien estructurados
 */
const myName = 'Nicolas';
console.log(myName);
