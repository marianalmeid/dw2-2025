function boasVindas(nome) {
    alert('Seja bem-vindo ' + nome);
}

document.getElementById('btn-boas-vindas').addEventListener('click', function () {
    const nome = document.getElementById('nome-completo').value;
    boasVindas(nome);
});