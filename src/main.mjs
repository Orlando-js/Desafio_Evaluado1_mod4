import Cliente from './cliente.mjs';
import Impuestos from './impuestos.mjs';

let impuestos_cliente1 = new Impuestos(750000,150000);

impuestos_cliente1.monto_bruto_anual = 850000;
impuestos_cliente1.deducciones = 200000;

let cliente1 = new Cliente('Pablo Marmol',impuestos_cliente1);

cliente1.nombre = 'Pedro Picapiedra';

console.log(`Nombre Cliente: ${cliente1.nombre}`);
console.log(`Monto bruto anual: ${impuestos_cliente1.monto_bruto_anual}`);
console.log(`Deducciones: ${impuestos_cliente1.deducciones}`);
console.log(`Impuesto: ${cliente1.calcularImpuesto(impuestos_cliente1.monto_bruto_anual,impuestos_cliente1.deducciones)}`);