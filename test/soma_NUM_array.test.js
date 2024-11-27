import { somaArray } from "../soma_NUM_array";

describe('mostre as somas', () => {
    it('deve retornar a soma de [1, 2, 3, 4]', () => {
        const esperado = 10 ;
        const retornado = somaArray([1, 2, 3, 4]);

        expect(retornado).toBe(esperado);
    })

    it('deve retornar a soma de [-1, -2, -3, -4]', () => {
        const esperado = -10 ;
        const retornado = somaArray([-1, -2, -3, -4]);

        expect(retornado).toBe(esperado);
    })

    it('deve retornar 0', () => {
        const esperado = 0 ;
        const retornado = somaArray([]);

        expect(retornado).toBe(esperado);
    })
})