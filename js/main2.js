console.log("Ejercicio b)" );

var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var mostrarGato = "Gato #" + i + ": 🐈 ";
    for (var j = 1; j <= cantidadDePasos; j++) {
        mostrarGato += "🐾";
    }
    console.log(mostrarGato);
}