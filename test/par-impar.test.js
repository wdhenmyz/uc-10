import {P_I_positivo, P_I_negativo, P_I_zero} from '../par-impar.js'

describe('par ou impar', () => {
    it('Os números positivos devem retornar par(true) e impar(false)', () => {
        const esperado = [true, false]
        const retornado = P_I_positivo(4, 3)
    
        expect(retornado).toEqual(esperado);
    })

    it('Os números negativos devem retornar par(true) e impar(false)', () => {
        const esperado = [true, false]
        const retornado = P_I_negativo(-4, -3)
    
        expect(retornado).toEqual(esperado);
    })

    it('Os números zero devem retornar par(true) e impar(false)', () => {
        const esperado = true
        const retornado = P_I_zero(0)
    
        expect(retornado).toEqual(esperado);
    })
})