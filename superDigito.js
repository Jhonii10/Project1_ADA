const readline = require('readline');

function sumarDigitos(numero) {
    if (numero < 10) {
        return numero;
    } else {
        return numero % 10 + sumarDigitos(Math.floor(numero / 10));
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite un número: ', (numero) => {
    numero = parseInt(numero);
    const sumaDigitos = sumarDigitos(numero);
    console.log(`La suma de los dígitos es: ${sumaDigitos}`);
    rl.close();
});