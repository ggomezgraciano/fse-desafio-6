
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


/* Gato #1: 😺
Gato #2: 😸
Gato #3: 😹
Gato #4: 😺
Gato #5: 😸
Gato #6: 😹
Gato #7: 😺
Gato #8: 😸
Gato #9: 😹
Gato #10: 😺 */