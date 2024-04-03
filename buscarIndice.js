function buscarIndice(vector, inicio, fin) {
    if (inicio > fin) {
        return false;
    }

    let medio = Math.floor((inicio + fin) / 2);

    if (vector[medio] === medio) {
        return true;
    } else if (vector[medio] > medio) {
        // El elemento en el medio es mayor que su índice, por lo que debemos buscar en la mitad izquierda.
        return buscarIndice(vector, inicio, medio - 1);
    } else {
        // El elemento en el medio es menor que su índice, por lo que debemos buscar en la mitad derecha.
        return buscarIndice(vector, medio + 1, fin);
    }
}

let vector = [4, 3, 2, 1, 0, -1, -2];

if (buscarIndice(vector, 0, vector.length - 1)) {
    console.log("Se encontró un elemento cuyo valor coincide con su índice.");
} else {
    console.log("No se encontró ningún elemento cuyo valor coincida con su índice.");
}
