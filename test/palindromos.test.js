import {ehPalindromo} from '../palindromos.js';

describe('palindromos', () => {
    it('deve retornar true para ana', () => {
        const esperado = true;
        const retornado = ehPalindromo("ana");

        expect(retornado).toBe(esperado);
    })

    it('deve retornar true para radar', () => {
        const esperado = true;
        const retornado = ehPalindromo("radar");

        expect(retornado).toBe(esperado);
    })

    it('deve retornar true para "A man a plan a canal Panama"', () => {
        const esperado = true;
        const retornado = ehPalindromo("A man a plan a canal Panama");

        expect(retornado).toBe(esperado);
    })

    it('deve retornar false para casa', () => {
        const esperado = false;
        const retornado = ehPalindromo("casa");

        expect(retornado).toBe(esperado);
    })
})
