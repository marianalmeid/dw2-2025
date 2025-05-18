const pessoa = {
    nome: 'Mariana',
    idade: 17,
    altura: 1.66
}
const json = JSON.stringify(pessoa);
console.log(json);

const people = JSON.parse(json);
console.log(people)