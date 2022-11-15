(() => {
  /**
   * Proporciona el tipo de dato a la variable sin inferirlo
   * number != Number, usar siempre los tipos de datos que inician en minuscula para variables simples
   * Si solo se declara la variable y no se inicializa puede salir error al usarla
   */
  let customerAge: number = 10;
  customerAge = customerAge + 20;
  console.log('customerAge', customerAge);

  /**
   * Funcion para parsear un string en un numeber
   * El valor NaN es un numero que no cuenta como numero
   */
  let discount01 = parseInt('100');
  let discount02 = parseInt('ABC');
  console.log('discount', discount01);
  console.log('discount', discount02);

  /**
   * Para declarar valores hexadecimales: 0xvalor
   */
  let hex = 0xfff;
  console.log('hexadecimal', hex);
  /**
   * Para declarar valores binarios: 0bvalor
   */
  let bin = 0b1010;
  console.log('binnario', bin);
})();
