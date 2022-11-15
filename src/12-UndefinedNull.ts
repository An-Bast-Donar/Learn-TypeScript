(() => {
  /**
   * Son su propio tipo de dato undefined y null
   * Por ende deben especificarse en los tipos de datos de la variable
   */
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'aas';

  /**
   * los diferentes tipos de dato tambien pueden definirse para los argumentos de una funcion
   */
  function hiV1(name: string | null) {
    let hello = 'Hola ';
    if (name) {
      hello += name.toLowerCase();
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    /**
     * Operador Nullish
     */
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV1('Nicolas');
  hiV1(null);

  hiV2('Nicolas');
  hiV2(null);
})();
