import { inverterPalavras } from "../inverter_palavras";

describe('inverterPalavras sem inverter as letras', () => {
    it('deve inverter as palavras', () => {
        const esperado = "mundo Olá";
        const retornado = inverterPalavras("Olá mundo");

        expect(retornado).toBe(esperado);

        console.log(retornado);
    })

    it('deve inverter as palavras', () => {
        const esperado = "incrível é JavaScript";
        const retornado = inverterPalavras("JavaScript é incrível");

        expect(retornado).toBe(esperado);

        console.log(retornado);
    })

    it('deve inverter(?) a palavra', () => {
        const esperado = "dev";
        const retornado = inverterPalavras("dev");

        expect(retornado).toBe(esperado);

        console.log(retornado);
    })
})