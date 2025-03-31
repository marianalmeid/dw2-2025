function horas(segundos){
    let horas = Math.floor(segundos/3600);
    segundos %= 3600;
    let minutos = Math.floor(segundos/60);
    segundos %= 60;
    return `${horas}:${minutos}:${segundos}`;
}
let segundos = 4000
console.log(horas(segundos));

