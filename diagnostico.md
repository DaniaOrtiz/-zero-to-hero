Welcome to fish, the friendly interactive shell
Type help for instructions on how to use fish
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (main)> git --version
git version 2.43.0
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (main)> npm -v
10.9.8
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (main)> node -v
v22.23.1

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

Clinica de errores controlados

dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npn -v.

Orden «npn» no encontrada. Quizá quiso decir:
  la orden «nnn» del paquete deb «nnn (4.9-1)»
  la orden «npx» del paquete deb «npm (9.2.0~ds1-2)»
  la orden «npm» del paquete deb «npm (9.2.0~ds1-2)»
  la orden «nn» del paquete deb «nn (6.7.3-15)»
Pruebe con: sudo apt install <nombre del paquete deb>
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab) [127]> npn -v
Orden «npn» no encontrada. Quizá quiso decir:
  la orden «nnn» del paquete deb «nnn (4.9-1)»
  la orden «nn» del paquete deb «nn (6.7.3-15)»
  la orden «npx» del paquete deb «npm (9.2.0~ds1-2)»
  la orden «npm» del paquete deb «npm (9.2.0~ds1-2)»
Pruebe con: sudo apt install <nombre del paquete deb>
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab) [127]> '/home/dania/Documentos/-zero-to-hero/src/holi.ts'
fish: Unknown command. '/home/dania/Documentos/-zero-to-hero/src/holi.ts' exists but is not an executable file.
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab) [126]> npx tsc
                                                                       node dist/holi.js
src/holi.ts:1:48 - error TS1002: Unterminated string literal.

1 console.log("Hola, granja de Pollitos Virttum);
                                                 ~


Found 1 error in src/holi.ts:1
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/secuencia.js
5 + 5 = 10
10 + 5 = 15
15 + 5 = 20
20 + 5 = 25
25 + 5 = 30
30 + 5 = 35
35 + 5 = 40
40 + 5 = 45
45 + 5 = 50
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> node dist/calculo.js
 5 + 2 =  7
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> 

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/profile.js
Me llamo Dania
Tengo 22 años
Me gusta la maruchan
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
Cuaderno:
1. Sin ejecutar, escribe la salida esperada y el tipo de product, unitPrice, quantity, available y total.

product: cuaderno
unitPrice: 35
quantity: 3
available = true
total = 105
2. Salida final:
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab) [1]> npx tsc
                                                                     node dist/cuaderno.js
Cuaderno: 3 x 35 = 105
Disponible: true
3. Cantidades modificadas:
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/cuaderno.js
Cuaderno: 3 x 25 = 75
Disponible: true
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/cuaderno.js
Cuaderno: 10 x 25 = 250
Disponible: true

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/01-ficha.js
Nombre: Alex
Ciudad: Quito

2. Explica por qué approximateAge es un cálculo aproximado y no un dato exacto.
Porque es un calculo con solo el año, no la fecha exacta de nacimiento
3. Cambia birthYear; comprueba que solo cambia la salida derivada.
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/01-ficha.js
Nombre: Dani
Ciudad: Felix
Edad aproximada: 23

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/lab)> npx tsc
                                                                 node dist/02-calculos-guiados.js
Área: 40
20 °C equivalen a 68 °F

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

1. Escribe const height = "5"
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/Ejercicios)> npx tsc
                                                                        node dist/02-calculos-guiados.js
src/02-calculos-guiados.ts:3:22 - error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

3 const area = width * height;
                       ~~~~~~


Found 1 error in src/02-calculos-guiados.ts:3

Área: 40
20 °C equivalen a 68 °F
2. Reasigna currentYear
dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/Ejercicios)> npx tsc
                                                                        node dist/01-ficha.js
Nombre: Dani
Ciudad: Felix
----------------
const firstName = "Dani";
const city = "Felix";
const birthYear = 2003;
let currentYear = 2026;
const approximateAge = currentYear - birthYear;

3. Cambia un backtick por comillas

dania@admin-virttum-250-Dell ~/D/-zero-to-hero (dev/dperez/Ejercicios)> npx tsc
                                                                        node dist/secuencia.js
src/secuencia.ts:3:42 - error TS1002: Unterminated string literal.

3   console.log("${num} + 5 = ${num + 5}`);
                                           ~

src/secuencia.ts:4:1 - error TS1005: ',' expected.

4 }
  ~


Found 2 errors in the same file, starting at: src/secuencia.ts:3

5 + 5 = 10
10 + 5 = 15
15 + 5 = 20
20 + 5 = 25
25 + 5 = 30
30 + 5 = 35
35 + 5 = 40
40 + 5 = 45
45 + 5 = 50

.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.

