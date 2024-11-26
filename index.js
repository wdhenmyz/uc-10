const salario = (salario, vAlimentação, vTransporte) => {
    return salario + vAlimentação + vTransporte
}
console.log(salario(1421, 350, 200));

const salarioDesconto = ( salario, inss) => {
    return salario - inss
}
console.log(salarioDesconto(1421, 150));

export {
    salario, 
    salarioDesconto
}