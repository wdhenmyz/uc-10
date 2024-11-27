const numerosPrimosAte = (n) => {
    if (n < 2) return []; // Não há primos menores que 2

    const primos = [];
    for (let i = 2; i <= n; i++) {
        let ehPrimo = true;

        // Verifica se 'i' é divisível por algum número menor que ele
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            primos.push(i);
        }
    }
    return primos;
};

export { numerosPrimosAte };