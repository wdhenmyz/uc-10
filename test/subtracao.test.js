import { subtracao1, subtracao2, subtracao3 } from "../subtracao";

describe('teste de subtrações', () => {
    it('deve subtrair dois positivos', () => {
        const esperado = -1;
        const retornado = subtracao1(2, 3);

        expect(retornado).toBe(esperado);
    })

    it('deve subtrair um positivo e um negativo', () => {
        const esperado = 5;
        const retornado = subtracao2(2, -3);

        expect(retornado).toBe(esperado);
    })

    it('deve subtrair dois negativos', () => {
        const esperado = 1;
        const retornado = subtracao3(-2, -3);

        expect(retornado).toBe(esperado);
    })
})

