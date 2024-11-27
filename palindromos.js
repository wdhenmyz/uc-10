const ehPalindromo = (str) => {
    // Remover espaços, pontuações e deixar tudo em minúsculas
    const limpaString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Verificar se a string é igual à sua reversa
    return limpaString === limpaString.split("").reverse().join("");
};

// Testando a função
console.log(ehPalindromo("ana")); // true
console.log(ehPalindromo("radar")); // true
console.log(ehPalindromo("A man a plan a canal Panama!")); // true
console.log(ehPalindromo("casa")); // false

export { ehPalindromo };