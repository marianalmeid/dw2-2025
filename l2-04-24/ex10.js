function contarpalavras(texto){
    const palavras = texto.trim().split(/\s+/).filter(palavra => palavra.length > 0);
    return palavras.length;
}

let texto = 'Crie um código que conte a quantidade de palavras em um textos'
console.log('palavras:',contarpalavras(texto));
