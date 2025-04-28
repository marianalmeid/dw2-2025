function boasVindas(nome) {
    alert('Seja bem-vindo ' + nome);
}

document.getElementById('btn-boas-vindas').onclick = function() {
    const nome = document.getElementById('nome-completo').value;
    boasVindas(nome);

};