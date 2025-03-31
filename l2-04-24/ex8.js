function primo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let num = 11
console.log(primo(num) ? "Primo" : "Não é primo");
