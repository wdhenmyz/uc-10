import { soma1, soma2, soma3 } from "../soma";

describe('teste de somas', () => {
    it('deve somar dois positivos', () => {
        const esperado = 5;
        const retornado = soma1(2, 3);

        expect(retornado).toBe(esperado);
    })

    it('deve somar um positivo e um negativo', () => {
        const esperado = -1;
        const retornado = soma2(2, -3);

        expect(retornado).toBe(esperado);
    })

    it('deve somar dois negativos', () => {
        const esperado = -5;
        const retornado = soma3(-2, -3);

        expect(retornado).toBe(esperado);
    })

})