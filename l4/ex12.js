function enctMenor(arr) {
    let num = arr[0];
    let posicao = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
            posicao = i;
        }
    }

    console.log("Menor valor:", num);
    console.log("Posicao:", posicao);
}

const vetor = [9, 2, -3, 4, 5, 6, 7, 1, 9, 10];
enctMenor(vetor);

