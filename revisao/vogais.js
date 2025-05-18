function contarVogais(frase){
    const vogais = 'aeiouAEIOU';
    let qntd = 0;

    for(let char of frase){ //percorre cada caractere da frase
        if (vogais.includes(char)){ //se o caractere estiver em vogais, soma 1 em qntd
            qntd++;
        }
    }
    return qntd
}


frase = 'eu gosto de chocolate';
console.log(contarVogais(frase));