import {encontrarMaiorNumero} from '../maiorNUM.js'

describe ('encontrarMaiorNumero', () => {
    it('deve retornar o numero 4', () => {
        const numeros = [1, 3, 2, 4];
        const maiorNumero = encontrarMaiorNumero(numeros);
        expect(maiorNumero).toBe(4);
    });

    it('deve retornar o numero -1', () => {
        const numeros = [-1, -2, -3];
        const maiorNumero = encontrarMaiorNumero(numeros);
        expect(maiorNumero).toBe(-1);
    });

    it('deve retornar o numero 6', () => {
        const numeros = [6];
        const maiorNumero = encontrarMaiorNumero(numeros);
        expect(maiorNumero).toBe(6);
    });
});