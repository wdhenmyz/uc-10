import { Fatorial_1, Fatorial_2, Fatorial_3 } from "../fatorial";

describe('mostre os fatoriais', () => {
    it('deve retornar o fatorial 6 de 3', () => {
        const esperado = 6;
        const retornado = Fatorial_1(3);

        expect(retornado).toBe(esperado);
    })

    it('deve retornar o fatorial 120 de 5', () => {
        const esperado = 120;
        const retornado = Fatorial_2(5);

        expect(retornado).toBe(esperado);
    })

    it('deve retornar o fatorial 1 de 0', () => {
        const esperado = 1;
        const retornado = Fatorial_3(0);

        expect(retornado).toBe(esperado);
    })

})