const soma1 = (positivo1 , positivo2) => {
    return positivo1 + positivo2
}
console.log(soma1(2, 3))

const soma2 = (positivo , negativo) => {
    return positivo + negativo
}
console.log(soma1(2, -3))

const soma3 = (negativo1 , negativo2) => {
    return negativo1 + negativo2
}
console.log(soma1(-2, -3))

export {
    soma1,
    soma2,
    soma3
}