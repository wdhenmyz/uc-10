const subtracao1 = (positivo1 , positivo2) => {
    return positivo1 - positivo2
}
console.log(subtracao1(2, 3))

const subtracao2 = (positivo , negativo) => {
    return positivo - negativo
}
console.log(subtracao2(2, -3))

const subtracao3 = (negativo1 , negativo2) => {
    return negativo1 - negativo2
}
console.log(subtracao3(-2, -3))

export {
    subtracao1,
    subtracao2,
    subtracao3
}