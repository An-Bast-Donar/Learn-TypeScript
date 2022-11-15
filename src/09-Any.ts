(() => {
   /**
    * Le permite a la variable resivir cualquier tipo de dato en cualquier momneto
    * Es recomendado nunca usarla
    */
   let myDynamicVar: any;
   myDynamicVar = 100;
   myDynamicVar = null;
   myDynamicVar = {};
   myDynamicVar = '';
   myDynamicVar = 'Hola';

   /**
    * Trata el valor de la variable como string
    */
   const rta1 = (myDynamicVar as string).toUpperCase();
   console.log(rta1);

   /**
    * Trata el valor de la variable como number
    */
   myDynamicVar = 5025;
   const rta2 = (<number>myDynamicVar).toFixed();
   console.log(rta2);
})();
