document.getElementById("isbnForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const isbnInput = document.getElementById("isbnInput").value.trim();
    const errorMessage = document.getElementById("error");
    const resultBox = document.getElementById("result");

    // Limpa mensagens anteriores
    errorMessage.textContent = "";
    resultBox.innerHTML = "";
    resultBox.style.display = "none";

    // Validação simples
    if (!isbnInput || isNaN(isbnInput)) {
        errorMessage.textContent = "Por favor, digite um ISBN válido (apenas números).";
        return;
    }

    try {
        const response = await fetch(`https://brasilapi.com.br/api/isbn/v1/${isbnInput}`);

        if (!response.ok) {
            throw new Error("Livro não encontrado. Verifique o ISBN e tente novamente.");
        }

        const data = await response.json();

        resultBox.innerHTML = `
            <p><strong>Título:</strong> ${data.title}</p>
            <p><strong>Autor:</strong> ${data.authors.join(", ")}</p>
            <p><strong>Editora:</strong> ${data.publisher}</p>
            <p><strong>Sinopse:</strong> ${data.synopsis || "Não disponível."}</p>
            <p><strong>ISBN-10:</strong> ${data.isbn}</p>
            <p><strong>ISBN-13:</strong> ${data.isbn13}</p>
        `;
        resultBox.style.display = "block";
    } catch (error) {
        errorMessage.textContent = error.message;
    }
});