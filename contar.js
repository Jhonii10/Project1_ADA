function contarFormas(X, N) {
    return contar(X, N, 1);
}

function contar(XRestante, N, numActual) {
    if (XRestante === 0) {
        return 1;
    }
    if (XRestante < 0 || Math.pow(numActual, N) > XRestante) {
        return 0;
    }
    const conNumActual = contar(XRestante - Math.pow(numActual, N), N, numActual + 1);
    const sinNumActual = contar(XRestante, N, numActual + 1);
    return conNumActual + sinNumActual;
}

const X = 10;
const N = 2;
const count = contarFormas(X, N);
console.log(`Número de formas de expresar ${X} como la suma de potencias de ${N}: ${count}`);
