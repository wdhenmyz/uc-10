import { contarPalavras } from "../contar_palavras";

describe('contar quantas vezes uma palavra de uma string aparece', () => {
    it('deve contar quantas vezes a palavra javascript aparece', () => {
        const esperado = 2;
        const retornado = contarPalavras("eu gosto de javascript, javascript é legal", "javascript");

        expect(retornado).toBe(esperado);
        console.log(retornado);
    })

    it('procurando uma palavra que nao aparece', () => {
        const esperado = 0;
        const retornado = contarPalavras("javascript é legal", "node");

        expect(retornado).toBe(esperado);
        console.log(retornado);
    })

    it('Testar com palavras maiúsculas e minúsculas', () => {
        const esperado = 3;
        const retornado = contarPalavras("Aaa aaa Aaa", "aaa");

        expect(retornado).toBe(esperado);
        console.log(retornado);
    })
})