const encontrarMaiorNumero = (numeros) => {
    if (numeros.length === 0) {
        return "O array está vazio.";
    }
    return Math.max(...numeros);
};

// Testando a função
console.log(encontrarMaiorNumero([10, 45, 2, 78, 23])); 
console.log(encontrarMaiorNumero([-5, -10, -1, -20]));  
console.log(encontrarMaiorNumero([6]));                  

export { encontrarMaiorNumero };