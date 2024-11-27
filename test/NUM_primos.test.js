import { numerosPrimosAte } from "../NUM_primos";

describe('numerosPrimosAte', () => {
    it('teste com numero pequeno', () => {
        const esperado = [2, 3, 5, 7];
        const retornado = numerosPrimosAte(10);

        expect(retornado).toEqual(esperado);

        console.log(retornado);
    })

    it('teste com numero grande', () => {
        const esperado = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        const retornado = numerosPrimosAte(30);

        expect(retornado).toEqual(esperado);

        console.log(retornado);
    })

    it('teste com numero grande primo', () => {
        const esperado = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        const retornado = numerosPrimosAte(97);

        expect(retornado).toEqual(esperado);

        console.log(retornado);
    })
})