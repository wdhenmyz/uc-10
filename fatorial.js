const Fatorial_1 = (numero) => {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }   
    return fatorial;

};

console.log(Fatorial_1(3));

const Fatorial_2 = (numero) => {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }   
    return fatorial;

};

console.log(Fatorial_2(5));

const Fatorial_3 = (numero) => {
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }   
    return fatorial;

};

console.log(Fatorial_3(0));

export {
    Fatorial_1,
    Fatorial_2,
    Fatorial_3
}