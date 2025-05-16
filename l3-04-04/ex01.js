function coordenada(x,y){
    if (x === 0 && y === 0) return "Origem";
    if (x === 0) return "eixo x";
    if (y === 0) return "eixo y";
    if (x > 0) return y > 0 ? "Q1" : "Q4";
    return y > 0 ? "Q2" : "Q3";
}

function triangulo(x, y, z) {
    if (x >= y + z) return "NAO FORMA TRIANGULO";
    if (x ** 2 === y ** 2 + z ** 2) return "TRIANGULO RETANGULO";
    if (x ** 2 > y ** 2 + z ** 2) return "TRIANGULO OBTUSANGULO";
    if (x === y && y === z) return "TRIANGULO EQUILATERO";
    return (x === y || y === z || x === z) ? "TRIANGULO ISOSCELES" : "TRIANGULO ACUTANGULO";
}

function calcularReajuste(salario) {
    let percentual;
    if (salario <= 400) percentual = 15;
    else if (salario <= 800) percentual = 12;
    else if (salario <= 1200) percentual = 10;
    else if (salario <= 2000) percentual = 7;
    else percentual = 4;
    
    let reajuste = salario * (percentual / 100);
    let novoSalario = salario + reajuste;
    return { novoSalario, reajuste, percentual }
}

function palindromo(str) {
    let inverso = str.split('').reverse().join('');
    return str === inverso;
}

let x = 0
let y = 5
let z = 5
let palavra = 'arara'

console.log(coordenada(x,y));
console.log(triangulo(x, y, z));

let salario = 800
let r = calcularReajuste(salario);
console.log(`Novo salário: ${r.novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${r.reajuste.toFixed(2)}`);
console.log(`Percentual: ${r.percentual} %`);

console.log(palindromo(palavra));


