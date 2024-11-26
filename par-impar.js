const P_I_positivo = (par , impar) => {
    return [par % 2 === 0, impar % 2 === 0]
}
console.log(P_I_positivo(4, 3))

const P_I_negativo = (par , impar) => {
    return [par % 2 === 0, impar % 2 === 0]
}
console.log(P_I_negativo(-4, -3))

const P_I_zero = (zero) => {
    return zero % 2 === 0
}
console.log(P_I_zero(0))

export {
    P_I_positivo,
    P_I_negativo,
    P_I_zero
}