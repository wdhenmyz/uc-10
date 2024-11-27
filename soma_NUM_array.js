const somaArray = (numeros) => {
    if (numeros.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio
    }
    return numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
};

// Testando a função
console.log(somaArray([1, 2, 3, 4, 5])); // Saída: 15
console.log(somaArray([-10, 20, -30, 40])); // Saída: 20
console.log(somaArray([])); // Saída: 0

export { somaArray };