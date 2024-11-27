const contarPalavras = (texto, palavra) => {
    // Expressão regular para encontrar todas as ocorrências da palavra
    const regex = new RegExp(`\\b${palavra}\\b`, 'gi');
    const ocorrencias = texto.match(regex);
    return ocorrencias ? ocorrencias.length : 0;
};

export { contarPalavras };