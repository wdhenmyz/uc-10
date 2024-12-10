import Item from "../item.js";

describe('teste dos items', () => {
    it('deve ter os campos: nome,valor e quantidade', () => {
        const item = new Item("beterraba", 2.5, 10);

        expect(item.nome).toBe("beterraba");
        expect(item.valor).toBe(2.5);
        expect(item.quantidade).toBe(10);
    });

    it('deve calcular o valor total do item de acordo com a quantidade', () => {
        const item = new Item("cebola", 0.1, 3);
        // toBeCloseTo serve para arredondar o valor
        expect(item.pegaValorTotalItem()).toBeCloseTo(0.3);
    })
})