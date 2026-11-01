console.log("Ejercicio c)" );

var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var mostrarGato = '';

for (var i = 1; i <= cantidadDeGatos; i++) {
    mostrarGato = "Gato #" + i + ": 🐈 ";

    switch (i % 2) {
        case 0:
            mostrarGato += "⬛ ";
            break;
        case 1:
            mostrarGato += " ";
            break;
    }

    for (var j = 1; j <= cantidadDePasos; j++) {
        mostrarGato += "🐾";
    }
    console.log(mostrarGato);
}