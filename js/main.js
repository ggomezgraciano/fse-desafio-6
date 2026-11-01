
console.log("Ejercicio a)" );

var cantidadDeGatos = 10;
for (var i = 1; i <= cantidadDeGatos; i++) {
    
    switch (i % 3) {
        case 0:
            console.log("Gato #" + i + ": 😹");
            break;
        case 1:
            console.log("Gato #" + i + ": 😺");
            break;
        case 2:
            console.log("Gato #" + i + ": 😸");
            break;
    }
}
