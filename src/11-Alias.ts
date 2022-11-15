(() => {
  /**
   * Con la palabra reservada type se puede crear un alias para definir uno o mas tipos y asignarsele posteriormente a una variable
   * Por ende esa variable sera del tipo que acabamos de crear
   */
  type UserId = string | number;
  let userId: UserId;

  /**
   * El alias tambien puede contener valores especificos para variables que solo pueden tomar ciertos valores
   * intenar settearle otros valores a la variable asi sean del mismo tipo dara error
   */
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'XL';
  shirtSize = 'M';

  /**
   * Estos alias tambien pueden ser usados en los argumentos de las funciones
   */
  function greeting(myText: UserId, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    }
  }

  greeting(11111, 'XL');
  greeting('111', 'XL');
})();
