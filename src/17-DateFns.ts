/**
 * Importar librerias con soporte
 * Se busca el repositorio, se checa que si tenga soporte para ts
 * Si el repo tiene un tsconfig es un fuerte indicativo que si tiene soporte para ts
 * Se instala la dependencia con el comando: (en la carpeta del proyecto, en este caso el nombre de la dependencia es date-fns) $npm i nombredependencia --save
 * date-fns es una dependencia para realizar operaciones a fecha, restar dias, sumar, entre otros, esta libreria tiene encuenta festividades y otras fechas especiales
 * Tener en cuenta que el 0 = enero y el 1 = febrero
 */
import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
