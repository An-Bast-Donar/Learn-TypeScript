(() => {
   /**
    * Solo puede tomar valores de true o false, otros datos generaran error
    */
   let isEnable: boolean;
   let random = Math.random();

   isEnable = random >= 0.5 ? true : false;

   console.log('random', random);
   console.log('isEnable', isEnable);
})();
