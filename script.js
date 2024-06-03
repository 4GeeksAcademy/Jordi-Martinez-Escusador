window.onload = function() {
    let array1 = ["Mi perro", "Un gato", "Mi tío", "Un vecino", "El primo de un amigo"]; //quien
    let array2 = ["se comío", "aventó", "empeñó", "se llevó", "me hizo"]; //que hizo
    let array3 = ["mi tarea", "el reporte", "mis llaves", "el carro", "la receta"]; //a que lo hizo
    let array4 = ["a noche", "ayer", "la semana pasada", "en la mañana", "ahorita"]; //cuando

    function seleccionarAleatorio(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    let excuse = seleccionarAleatorio(array1) + " " +
                seleccionarAleatorio(array2) + " " +
                seleccionarAleatorio(array3) + " " +
                seleccionarAleatorio(array4) + ".";

    document.getElementById("miescusa").innerHTML = excuse;
};