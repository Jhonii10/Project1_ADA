// Versión recursiva
function fibRecurs(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibRecurs(n - 1) + fibRecurs(n - 2);
    }
  }
  
  // Versión iterativa
  function fibIter(n) {
    if (n <= 1) {
      return n;
    }
  
    let F = new Array(n + 1);
    F[0] = 0;
    F[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      F[i] = F[i - 1] + F[i - 2];
    }
  
    return F[n];
  }
  
  // Ejemplo de uso
  let numbersToGenerate = [3, 5, 7, 10];
  
  for (let n of numbersToGenerate) {
    console.log(`Generando los primeros ${n} números de Fibonacci:`);
  
    // Versión recursiva
    let startTimeRecurs = performance.now();
    console.log("Versión Recursiva: ");
    for (let i = 0; i < n; i++) {
      process.stdout.write(fibRecurs(i) + " ");
    }
    let endTimeRecurs = performance.now();
    let durationRecurs = endTimeRecurs - startTimeRecurs; // Tiempo en milisegundos
  
    console.log(`\nTiempo Recursivo: ${durationRecurs} ms`);
  
    // Versión iterativa
    let startTimeIter = performance.now();
    console.log("Versión Iterativa: ");
    for (let i = 0; i < n; i++) {
      process.stdout.write(fibIter(i) + " ");
    }
    let endTimeIter = performance.now();
    let durationIter = endTimeIter - startTimeIter; // Tiempo en milisegundos
  
    console.log(`\nTiempo Iterativo: ${durationIter} ms`);
    console.log();
  }