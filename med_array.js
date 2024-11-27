const calcularMedia = (numeros) => {
    const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma / numeros.length;
};

export { calcularMedia };