import Carrinho from "../carrinho";
import Item from "../item";

describe('testes de carrinho', () => {
    const carrinho = new Carrinho();

    const item = new Item('banana', 2, 1);
    const item2 = new Item('bolsa', 99, 1);
 
    it('deve inicializar um carrinho vazio', () => {
        expect(carrinho.itens).toHaveLength(0);
        expect(carrinho.frete).toBeNull();
        expect(carrinho.subtotal).toBeNull();
        expect(carrinho.total).toBeNull();
    });

    it('deve ter itens', () => {
        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(carrinho.itens).toHaveLength(2)
        expect(typeof carrinho).toBe('object')

        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);


        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    });

    it('deve ter as seguintes propriedades na inicialização', () => {
        expect(carrinho).toHaveProperty('frete');
        expect(carrinho).toHaveProperty('total');
        expect(carrinho).toHaveProperty('subtotal');
        expect(carrinho).toHaveProperty('itens');
    });

    it('deve adicionar frete', () => {
        carrinho.adicionaFrete(10);
        carrinho.calculaTotal();

        expect(carrinho.frete).toBe(10);
        expect(carrinho.calculaTotal()).toBe(111);
    });

    it('deve finalizar compra', () => {
        let final = carrinho.finalizaCompra();

        expect(final).toEqual({
            subtotal: 101,
            frete: 10,
            total: 111
        })
    });
});