import { calcularMedia } from "../med_array";

describe('deve mostrar as médias dos array dados', () => {
    it('deve retornar a média de [1, 2, 3, 4]', () => {
        const esperado = 2.5;
        const retornado = calcularMedia([1, 2, 3, 4]);

        expect(retornado).toBe(esperado);
        console.log(retornado);
    })

    it('deve retornar a média de [-1, -2, -3]', () => {
        const esperado = -2;
        const retornado = calcularMedia([-1, -2, -3]);

        expect(retornado).toBe(esperado);
        console.log(retornado);
    })

    it('deve retornar NaN', () => {
        const esperado = NaN;
        const retornado = calcularMedia([]);

        expect(retornado).toBe(esperado);
        console.log(retornado);
    })
})