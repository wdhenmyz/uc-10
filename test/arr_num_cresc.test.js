import { ordenarArrayCrescente } from "../arr_num_cresc";

describe('ordenarArrayCrescente', () => {
    it('deve ordenar um array de numeros em ordem crescente', () => {
        const numeros = [5, 3, 8, 2, 1, 4, 7, 6];
        const esperado = [1, 2, 3, 4, 5, 6, 7, 8];
        const retornado = ordenarArrayCrescente(numeros);

        expect(retornado).toEqual(esperado);
    })

    it('deve ordenar um array de numeros em ordem crescente(?)', () => {
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
        const esperado = [1, 2, 3, 4, 5, 6, 7, 8];
        const retornado = ordenarArrayCrescente(numeros);

        expect(retornado).toEqual(esperado);
    })

    it('deve ordenar um array de numeros negativos em ordem crescente', () => {
        const numeros = [-5, -3, -8, -2, -1, -4, -7, -6];
        const esperado = [-8, -7, -6, -5, -4, -3, -2, -1];
        const retornado = ordenarArrayCrescente(numeros);

        expect(retornado).toEqual(esperado);
    })
})