import { salario, salarioDesconto } from "../index";

// describe para agrupar um conjunto de testes
describe('calculos gerais do salário', () => {
    // it ou test são a mesma coisa, porem it tem uma melhor sintaxe
    it('deve retornar o salario + beneficios', () => {
        const esperado = 3000;
        const retornado = salario(2000, 500, 500);
    
        expect(retornado).toBe(esperado);
    });
    
    it('deve retornar o salario descontado', () => {
        const esperado = 1271;
        const retornado = salarioDesconto(1421, 150);
    
        expect(retornado).toBe(esperado);
    })
});


/*test('deve retornar o salario + beneficios', () => {
    const esperado = 3000;
    const retornado = salario(2000, 500, 500);

    expect(retornado).toBe(esperado);
});

test('deve retornar o salario descontado', () => {
    const esperado = 1271;
    const retornado = salarioDesconto(1421, 150);

    expect(retornado).toBe(esperado);
})*/